import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContaService } from '../../services';
import { Conta } from '../../classes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  conta: Conta = new Conta();

  constructor(private router: Router, private contaService: ContaService) {}

  logar(): void {
    const dadosLogin = {
      conta: this.conta.conta,
      senha: this.conta.senha
    };

    this.contaService.postLoginContaAPI(dadosLogin).subscribe({
      next: (resposta) => {
        console.log('Login bem-sucedido:', resposta);
        window.alert('Logado com sucesso!');
        this.router.navigate(['/dashboard-cliente']);
      },
      error: (erro) => {
        console.error('Erro no login:', erro);
        window.alert('Erro ao fazer login. Verifique os dados e tente novamente.');
      },
    });
  }
}