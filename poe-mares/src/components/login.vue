<template>
  <div>
    <div class="login-form card">
        
        <div class="img-container">
       <img src="https://i.ibb.co/MPYXPFK/pp.jpg" alt="pp" border="0">

        </div>

        <p class="blog-title">Bem vindo(a) ao BLOG POEMARES! Digite as suas credenciais.</p>

        <div v-if="exibirMensagemErro" class="alert alert-danger">
           <a> <strong>Erro!</strong> E-mail e/ou senha inválido(s)</a>.
        </div>

        <div class="row">
            <form class="col s12">
              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="email">
                  <label for="email">E-mail</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="senha">
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="row">
                <a v-on:click="login" class="waves-effect waves-light btn btn-large Maroon botao-login">ENTRAR</a>
              </div>
              <div class="row">
                  <p class="esqueceu-a-senha">Esqueceu a senha?</p>
              </div>
              <div class="row">
                  <a class="waves-effect waves-light btn btn-large botao-login botao-novo-usuario">CADASTRE-SE AGORA</a>
              </div>
            </form>
          </div>
    </div>
  </div>
</template>

<script>
 

export default {
  name: 'login',
  

}
</script>

<style>
.login-form {
        width: 30vw;
        margin-left: 35vw;
        margin-top: 10vh;
        text-align: center;
        padding: 40px;
        background: rgba(0,0,0,0.03);
      }

      .img-container {
        width: 150px;
        height: 150px;
        background: white;
        border-radius: 80px;
        padding-top: 0px;
        border: 3px solid black;
        margin-left: 160px;
      }

      .img-container img {
        width: 150px;
        border-radius: 80px;
        height: 150px;
      }

      .botao-login {
          width: 100%;
      }

      .blog-title {
        text-align: left;
        color: #40E0D0;
        font-size: 16px;
        font-weight: bold;
        margin-top: 32px;
      }

      .esqueceu-a-senha {
        color: 	#48D1CC;
        cursor: pointer;
        margin-bottom: 0;
      }

      .no-margin-bottom, .no-margin-bottom .input-field {
          margin-bottom: 0!important;
      }

      .alert {
        position: relative;
        padding: .75rem 1.25rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        text-align: left;
      }

      .alert-danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }

      .botao-novo-usuario {
        background: white;
        color: #4CAF50 !important;
        border: 1px solid #4CAF50 !important;
        font-weight: bold;
      }

      .botao-novo-usuario:hover {
        background: #4CAF50 !important;
        color: white!important;
      }
</style>
