<template>
    <div class="content">
                <nav class="breadcrumb-menu">
                    <div class="nav-wrapper">
                        <div class="col s12">
                        <a href="#!" class="breadcrumb">Início</a>
                        </div>
                    </div>
                </nav>

                <div class="dashboard-content">
                    <h4> <i class="fas fa-chart-line"></i> Destaques</h4>

                    <div class="row">
                        <div class="col l3">
                            <div class="card dashboard-item item1">
                                <i class="fab fa-microblog"></i>
                                <p>12 <span>Itens cadastrados</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item2">
                                <i class="far fa-newspaper"></i>
                                <p>300 <span>Posts</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item3">
                                <i class="far fa-comments"></i>
                                <p>1.000 <span>Comentários</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item4">
                                <i class="material-icons">headset_mic</i>
                                <p>15 <span>Podcast</span></p>
                            </div>
                        </div>
                         <div class="col l3">
                            <div class="card dashboard-item item5">
                                <i class="material-icons">create</i>
                                <p>10 <span>Poetas</span></p>
                            </div>
                    </div>

                    <div class="row">
                        <div class="col l12">
                            <p style="color: #777;"><i class="fas fa-history" style="margin-right: 5px;"></i>Recentes</p>
                        </div>
                        <div class="col l12">
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="fab fa-microblog"></i></i>
                                    <span class="title"><b>Novo item cadastrado</b></span>
                                    <p>Poema NaNa, NaNaNa <br>
                                       SENTES que a minha vida é um rio caudaloso,tomado do delírio das enchentes,correndo alucinado para o mar!
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="far fa-newspaper"></i></i>
                                    <span class="title"><b>Nova postagem</b></span>
                                    <p>Podcast Trem de Alagoas <br>
                                        <a href= "http://www.algumapoesia.com.br/som/ascensoferreira_tremdealagoas.mp3"> Visite Poemares</a>

                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle red"><i class="fa fa-times"></i></i>
                                    <span class="title"><b>Item removido</b></span>
                                    <p>Biografia de Artur Griz <br>
                                        Removido em 20/01/2020
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle blue"><i class="far fa-user"></i></i>
                                    <span class="title"><b>Usuário cadastrado</b></span>
                                    <p>Maria Luiza <br>
                                        Cadastrado em 01/02/2021
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="far fa-newspaper"></i></i>
                                    <span class="title"><b>Nova postagem</b></span>
                                    <p>Biografia Ascenso Ferreira<br>
                                     Ascenso Ferreira (1895-1965) nasceu em Palmares, Pernambuco, no dia 9 de maio de 1895
                                    </p>
                                </li>
                            </ul>
                            <div class="col l12 button-div">
                            <a class="waves-effect waves-light btn blue">carregar mais...</a>
                         </div>

                           <div>
                            <h2>Fale conosco</h2>

                              <table>

                               <tr>
                            <td>Nome</td>
                             <td>  <input type="text" id="nomeid" placeholder="Priscila Araujo" required="required" name="nome" /><br></td>

                             </tr>
        
                              <tr>
                            <td>Fone</td>
                             <td>  <input type="tel" id="foneid" placeholder="(xx)xxxxx-xxxx" name="fone" /><br></td>
  

                              </tr>
                              <tr>
                              <td>E-mail</td>
                            <td><input type="email" id="emailid" placeholder="fulano@mail.com" name="email" /> <br></td>

                              </tr>
                               <tr>
                              <td>comentários</td>
                               <td><textarea placeholder="Deixe sua opnião"></textarea></td>
                                 <td style ="background-color:green;"> <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" /><br></td>

                               </tr>

                             </table>    
                                          
                         </div>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
    </div>
         
    
</template>

<script>
export default {
    name: 'principal'
}
</script>

<style scoped>
.button-div {
    text-align: center;
}
.dashboard-item {
    display: flex;
    color: white;
    font-size: 24px;
    padding: 3px;
}
.dashboard-item p {
    margin: 0;
    display: grid;
    font-size: 24px;
    font-weight: bold;
}
.dashboard-item p span {
    font-size: 18px;
    font-weight: 100;
}
.item1 {
    background: #db880b;
}
.item2 {
    background: #7b16aa;
}
.item3 {
    background: #4fbc95;
}
.item4 {
    background: #0a4666;
}
.item5 {
    background: #d12bb5;
}
.dashboard-item i {
    font-size: 70px;
    color: rgba(0,0,0,0.3);
    border-right: 1px solid rgba(0,0,0,0.3);
    padding-right: 10px;
    margin-right: 10px;
}
.content {
    width: calc(100% - 200px);
    background: rgba(0,0,0,0.01);
}
.content h4 {
    color: #349a46;
    font-weight: 100;
}
.dashboard-content {
    width: 90%;
    margin-left: 5%;
    padding: 10px;
    margin-top: 20px;
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