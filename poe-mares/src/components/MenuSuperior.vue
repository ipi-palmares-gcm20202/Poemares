<template>
    <nav>
        <div class="nav-wrapper">
              <img src="https://i.ibb.co/jvbZ1cz/POOEMA.jpg" alt="POOEMA" border="0">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="collapsible.html">Login</a></li>
                <li><a href="collapsible.html">Cadastrar</a></li>
               <li><a href="sass.html"><i class="fa fa-search"></i></a></li>
               <li><a href="collapsible.html">Sair</a></li>
            </ul>
     </div>
    </nav>

</template>

<script>
export default {
    name: 'menu-superior'
}
</script>

<style  scoped>
nav {
            background: #ddd;
            color: #349a46;
        }

        nav img {
            width: 90px;
            margin-top: 5px;
            margin-left: 15px;
        }

        nav ul li a {
            color: #349a46;
        }


</style>