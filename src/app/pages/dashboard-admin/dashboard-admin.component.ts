import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services';
import { Conta } from '../../classes/conta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule],
  templateUrl: './dashboard-admin.component.html'
})
export class DashboardAdminComponent implements OnInit{
  contas: Conta[] = [];

  constructor(private contaService: ContaService) {}

  // Método para listar contas
  listarContas(): void {
    this.contaService.getContasAPI().subscribe({
      next: (resposta) => {
        this.contas = resposta;  // Atribuindo as contas recebidas da API
      },
      error: (erro) => {
        console.error('Erro ao listar contas', erro);
        window.alert('Erro ao listar as contas');
      }
    });
  }

  ngOnInit(): void {
    this.listarContas();  // Chama o método para listar as contas quando o componente for carregado
  }
}
