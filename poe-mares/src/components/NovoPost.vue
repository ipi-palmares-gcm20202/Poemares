<template>
     <div class="content">
          <nav class="breadcrumb-menu">
            <div class="nav-wrapper">
              <div class="col s12">
                <a href="#!" class="breadcrumb">Início</a>
                <a href="#!" class="breadcrumb">Itens</a>
                <a href="#!" class="breadcrumb">Novo-Post</a>
               
               
              </div>
            </div>
          </nav>

            <div class="new-itens-content card">
                <h4> <i class="fa fa-home"></i> Novo-Post</h4>

                <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <input id="title" type="text" class="validate" v-model="titulo">
                          <label for="title">Título</label>
                        </div>
                      </div>

                      <div class="row">
                        <div class="input-field col s12">
                            <textarea id="description" class="materialize-textarea" v-model="descricao"></textarea>
                            <label for="description">Descrição</label>
                        </div>
                      </div>
                       

                      <div class="row buttons-div">
                        <a class="waves-effect waves-light btn red"><i class="material-icons right">close</i>CANCELAR</a>
                        <a v-on:click="cadastrarItens" class="waves-effect waves-light btn green"><i class="material-icons right">check</i>CADASTRAR</a>
                      </div>
                    </form>
                  </div>
            </div>
     </div>
</template>

<script>
export default {
    neme: 'novos-itens'
}
</script>


<style  scoped>
 .content {
            width: calc(100% - 200px);
            background: rgba(0,0,0,0.01);
      }

      .content h4 {
        color: #349a46;
        font-weight: 100;
      }

      .new-itens-content {
        width: 60%;
        margin-left: 20%;
        padding: 10px;
        margin-top: 50px;
        padding-left: 40px;
      }

      .row {
          margin-bottom: 0!important;
      }

      .buttons-div {
        float: right;
        margin-bottom: 20px!important;
      }

      .breadcrumb-menu {
        background: #349a46;
        padding-left: 20px;
      }
</style>