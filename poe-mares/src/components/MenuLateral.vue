<template>
    <div class="sidebar">
        <div class="sidebar-title">
            <i class="fa fa-user"></i>
                <span>Poemares</span>
        </div>
        
            <div class="separator">
 
                <div class="sidebar-menu">
                    <div class="sidebar-menu-item ">
                        <i class="fa fa-home"></i>
                        <span>Início</span>
                    </div>

                    <div class="sidebar-menu-item menu-active">
                        <i class="fa fa-home"></i>
                        <span>itens</span>
                    </div>
                
                
                    <div class="sidebar-menu-item ">
                        <i class="fa fa-home"></i>
                        <span>Posts</span>
                    </div>
                  </div>
             </div>
    </div>
</template>

<script>
export default {
    name:'menu-lateral'
}
</script>

<style scoped>
.sidebar {
            width: 200px;
            height: calc(100vh - 64px);
            background-color: rgba(0, 0, 0, 0.03);
            box-shadow: none;
            border-right: 1px solid rgba(0, 0, 0, 0.14);
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            padding: 20px;
        }

        .sidebar-title {
            font-size: 18px;
            font-weight: bold;
            color: #349a46;
            margin-bottom: 12px;
        }

        .sidebar-menu {
            padding-left: 10px;
            font-size: 16px;
            margin-top: 45px;
        }

        .sidebar-menu-item {
            cursor: pointer;
            margin-bottom: 10px;
        }

        .sidebar-menu-item:hover {
            background: rgba(0, 0, 0, 0.08);
            padding: 2px;
            color: #555;
        }

        .menu-active {
            font-weight: bold;
            color: #349a46;
        }

        .menu-active span {
            border-bottom: 1px solid;
            padding-bottom: 4px;
        }

        .sidebar-menu-item i {
            margin-right: 5px;
        }

        .separator {
            width: 200px;
            height: 1px;
            background: #349a46;
            position: absolute;
            left: 0;
        }
</style>