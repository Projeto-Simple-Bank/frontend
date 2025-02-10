import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Conta, Usuario } from '../../classes';
import { Modal } from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { ContaService } from '../../services';
import { CommonModule } from '@angular/common';
import { NovaConta } from '../../classes/nova-conta';
import { ClienteDTO } from '../../classes/clienteDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-admin.component.html',
})
export class DashboardAdminComponent implements OnInit {
  contas: Conta[] = [];
  usuariosSemConta: Usuario[] = [];
  contaSelecionada: Conta | null = null;
  usuarioSelecionado: Usuario | null = null;
  novaConta: NovaConta = new NovaConta();

  constructor(
    private contaService: ContaService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.listarContas();
    this.listarUsuariosSemConta();
  }

  abrirModal(conta: Conta): void {
    this.contaSelecionada = conta;
    const modalElement = document.getElementById(
      'detalhesContaModal'
    ) as HTMLElement;
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  abrirModal2(usuario: Usuario): void {
    this.usuarioSelecionado = usuario;
    const modalElement = document.getElementById(
      'autorizarContaModal'
    ) as HTMLElement;
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  listarContas(): void {
    this.contaService.getContasAPI().subscribe({
      next: (contas) => {
        this.contas = contas;
      },
      error: (erro) => {
        console.error('Erro ao listar contas', erro);
      },
    });
  }

  listarUsuariosSemConta(): void {
    this.adminService.listarUsuariosSemConta().subscribe({
      next: (usuariosSemConta) => {
        this.usuariosSemConta = usuariosSemConta;
      },
      error: (erro) => {
        console.error('Erro ao listar usuários sem conta', erro);
      },
    });
  }

  abrirConta(): void {
    if (!this.usuarioSelecionado || !this.usuarioSelecionado.id) {
      Swal.fire({
        title: 'Usuário inválido!',
        icon: 'error',
        confirmButtonColor: '#e80070',
        timer: 3000,
        customClass: { title: 'alert' },
      });
      return;
    }

    this.novaConta.usuario = { id: this.usuarioSelecionado.id } as Usuario;

    this.contaService.postContaAPI(this.novaConta).subscribe({
      next: (contaCriada) => {
        Swal.fire({
          title: `Conta criada com sucesso! Número: ${contaCriada.conta}`,
          icon: 'success',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
        this.listarUsuariosSemConta();
        this.listarContas();

        const modalElement = document.getElementById('autorizarContaModal');
        if (modalElement) {
          const modalInstance = Modal.getInstance(modalElement);
          modalInstance?.hide();
        }
      },
      error: (erro) => {
        console.error('Erro ao criar conta:', erro);
        Swal.fire({
          title: 'Erro ao criar conta!',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });
  }

  alterarCliente(): void {
    if (!this.contaSelecionada || !this.contaSelecionada.usuario) {
      alert('Nenhuma conta selecionada ou usuário inválido!');
      return;
    }

    const clienteDTO: ClienteDTO = {
      id: this.contaSelecionada.usuario.id,
      nome: this.contaSelecionada.usuario.nome,
      endereco: this.contaSelecionada.usuario.cep,
      tipoConta: this.contaSelecionada.tipoConta,
      ativa: this.contaSelecionada.ativa,
    };

    this.adminService.putAlterarClienteAPI(clienteDTO).subscribe({
      next: () => {
        Swal.fire({
          title: 'Cliente alterado com sucesso!',
          icon: 'success',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });

        this.listarContas();

        const modalElement = document.getElementById('alterarInfos');
        if (modalElement) {
          const modalInstance = Modal.getInstance(modalElement);
          modalInstance?.hide();
        }
      },
      error: (erro) => {
        console.error('Erro ao alterar cliente:', erro);
        Swal.fire({
          title: 'Erro ao alterar cliente!',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });
  }

  tabelaAtiva: 'contas' | 'usuariosSemConta' = 'contas';

  alternarTabela() {
    this.tabelaAtiva =
      this.tabelaAtiva === 'contas' ? 'usuariosSemConta' : 'contas';
  }
}
