<template>
    <div>
        <!-- Logo -->
        <a href="/#/home" class="logo" >
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini">App</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg" v-if="user.level_data !== undefined">{{ user.level_data.system }}</span>
        </a>

        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img :src="'../../images/users/' + user.photo " class="user-image" alt="User Image">
                            <span class="hidden-xs">{{ user.name }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img :src="'../../images/users/' + user.photo " class="img-circle" alt="User Image">
                                <p>
                                    {{ user.name }}
                                    <small>Member since: {{ moment(user.created_at).format("MM/DD/YYYY") }}</small>
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="/#/profile" class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a @click="logout" class="btn btn-default btn-flat">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'HeaderLayout',
        methods:{
            logout: function() {
                this.$emit('logout')
            }
        },
        computed:{
            user(){
                return this.$store.state.user;
            }
        }
    }
</script>