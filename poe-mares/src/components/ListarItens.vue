<template>
<div class="content">
                <nav class="breadcrumb-menu">
                    <div class="nav-wrapper">
                        <div class="col s12">
                            <a href="#!" class="breadcrumb">Início</a>
                            <a href="#!" class="breadcrumb">Itens</a>
                        </div>
                    </div>
                </nav>

                <div class="new-itens-content card">
                    <h4> <i class="fab fa-microitens"></i> Itens</h4>

                    <router-link to="/novo-itens" class="button-add btn-floating waves-effect waves-light green"><i class="material-icons">add</i></router-link>

                    <div class="row">
                        <div class="card filtros-card">
                            <div class="row">
                                <div class="input-field col s5">
                                    <input v-model="filtroTitulo" placeholder="Pesquisar por título..." id="title" type="text" class="validate">
                                    <label for="title">Título</label>
                                </div>
                                
                                <div class="input-field col s5">
                                    <input v-model="filtroDescricao" placeholder="Pesquisar por descrição..." id="description" type="text" class="validate">
                                    <label for="description">Descrição</label>
                                </div>

                                <div class="input-field col s2 botao-filtrar-div">
                                    <a v-on:click="buscar" class="waves-effect waves-light btn blue botao-filtrar"><i class="material-icons left">search</i>filtrar</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <table v-if="itensFiltrados.length > 0" class="striped">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Asssunto</th>
                                    <th class="edit-remove-column">Editar/Remover</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="itens in itensFiltrados" v-bind:key="itens">
                                    <td>{{ itens.titulo }}</td>
                                    <td>{{ itens.descricao }}</td>
                                    <td>{{ itens.assunto }}</td>
                                    <td class="edit-remove-column">
                                        <i class="fas fa-edit"></i>
                                        <i v-on:click="remover(itens.id)" class="fas fa-trash"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-if="itensFiltrados.length == 0" class="alert alert-warning" role="alert">
                            <i class="far fa-frown"></i>Não há itens cadastrados para os filtros especificados.
                        </div>
                    </div>
                </div>

</div>
        
</template>



<script>
export default {
    name: 'listar-itens',
    data() {
        return {
            filtroTitulo: '',
            filtroDescricao: '',
            itens: [
                { id: 1, titulo: 'Podcast Canaa caianna', descricao: 'Áudio de 15 minutos', assunto:'Poema falado'},
                { id: 2, titulo: 'Podcast Gênesis', descricao: 'Áudio de 6 Minutos', assunto: 'Poema falado'},
                { id: 3, titulo: 'Artur Griz', descricao: 'Resumo da vida e obras ', assunto: 'Biografia'},
                { id: 4, titulo: 'Passos da Vida ', descricao: 'Obra escrita', assunto: 'Poesia'},
             
            ],
            itensFiltrados: []
        }
    },
    methods: {
        buscar() {
            this.itensFiltrados = this.itens.filter(itens => itens.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase()));
            
            this.itensFiltrados = this.itensFiltrados.filter(itens => itens.descricao.toLowerCase().includes(this.filtroDescricao.toLowerCase()))
        },
        remover(id) {
            this.itens = this.itens.filter(itens => itens.id != id);
            this.buscar();
        }
    }
}


</script>



<style>
.content {
    width: calc(100% - 100px);
    background: rgba(0, 0, 0, 0.01);
}
.content h4 {
    color: #218133;
    font-weight: 100;
}
.new-itens-content {
    width: 60%;
    margin-left: 10%;
    padding: 10px;
    margin-top: 45px;
    padding-left: 10px;
}
.row {
    margin-bottom: 0 !important;
}
.buttons-div {
    float: right;
    margin-bottom: 10px !important;
}
.breadcrumb-menu {
    background: #349a46;
    padding-left: 20px;
}
.edit-remove-column {
    text-align: center;
    width: 15%;
}
.edit-remove-column i{
    cursor: pointer;
    font-size: 18px;
}
.edit-remove-column .fa-trash{ 
    color: red;
}
.edit-remove-column .fa-edit{ 
    color: dodgerblue;
}
.filtros-card {
    margin-top: 30px;
    padding: 10px;
    background: rgba(0,0,0,0.02);
    padding-bottom: 0;
}
.botao-filtrar {
    height: 45px;
    padding-top: 5px;
    width: 100%;
}
.button-add {
    position: absolute;
    right: 30px;
    top: 30px;
}
.filtros-card .row .input-field input {
    background: white;
    border: 1px solid #eee;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 5px;
}
.botao-filtrar-div {
    margin-top: 25px;
}
.email-text {
    font-size: 12px;
    color: #aaa;
    margin-left: 15px;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-align: left;
    font-size: 16px;
}
.alert i {
    margin-right: 10px;
}
.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
</style>