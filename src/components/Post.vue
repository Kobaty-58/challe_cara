<template>
    <div id="posts-wrapper">
        <hr/>
        <h2>みんなの投稿</h2>
        <v-btn v-on:click="show_normal_card" variant="outline-primary">Normal</v-btn>
        <v-btn v-on:click="show_battle_card" variant="outline-primary" style="margin:0px 10px;">Battle</v-btn>
        <v-btn v-on:click="show_interior_card" variant="outline-primary">Interior</v-btn>
        <v-btn v-on:click="show_recipe_card" variant="outline-primary">Recipe</v-btn>
        <transition-group name="normal-card-transition">
            <v-card
                tag="article"
                style="max-width: 20rem;"
                class="post-card"
                v-for="post in posts"
                v-bind:key="post.id"
                v-show="card_show_normal"
            >
                <v-card-text v-if='post.cont_type=="normal"'>
                    <p style="font-size:80%;color:gray;">{{post.name}}</p>
                    <p>{{post.cont}}</p>
                </v-card-text>
            </v-card>
        </transition-group>
        <transition-group name="battle-card-transition">
            <v-card
                tag="article"
                style="max-width: 20rem"
                class="post-card"
                v-for="post in posts"
                v-bind:key="post.id"
                v-show="card_show_battle"
            >
                <v-card-text v-if="post.cont_type=='battle'">
                    <p style="font-size:80%;color:gray;">{{post.name}}</p>
                    <p>{{post.cont}}</p>
                </v-card-text>
            </v-card>
        </transition-group>
        <transition-group name="interior-card-transition">
            <v-card
                tag="article"
                style="max-width: 20rem"
                class="post-card"
                v-for="post in posts"
                v-bind:key="post.id"
                v-show="card_show_interior"
            >
                <v-card-text v-if="post.cont_type=='interior'">
                    <p style="font-size:80%;color:gray;">{{post.name}}</p>
                    <p>{{post.cont}}</p>
                </v-card-text>
            </v-card>
        </transition-group>
        <transition-group name="recipe-card-transition">
            <v-card
                tag="article"
                style="max-width: 20rem"
                class="post-card"
                v-for="post in posts"
                v-bind:key="post.id"
                v-show="card_show_recipe"
            >
                <v-card-text v-if="post.cont_type=='recipe'">
                    <p style="font-size:80%;color:gray;">{{post.name}}</p>
                    <p>{{post.cont}}</p>
                </v-card-text>
            </v-card>
        </transition-group>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
    name:"form-wrapper",
    data(){
        return{
            posts:[],
            card_show_normal:true,
            card_show_battle:true,
            card_show_interior:true,
            card_show_recipe:true,
        }
    },
    created:
    function(){
        firebase.firestore().collection("posted_data").where("id",">=","1")
            .onSnapshot(function(querySnapshot){
                querySnapshot.forEach(function(doc){

                    var id_ary=new Array();
                    this.posts.forEach(function(post){
                        id_ary.push(post.id);
                    });
                    if(id_ary.indexOf(doc.data().id)==-1){
                        this.posts.push(doc.data());
                    }
                }.bind(this));
            }.bind(this));
    },
    methods:{
        show_normal_card:function(){
            this.card_show_normal=true;
            this.card_show_battle=false;
            this.card_show_interior=false;
            this.card_show_recipe=false;
        },
        show_battle_card:function(){
            this.card_show_normal=false;
            this.card_show_battle=true;
            this.card_show_interior=false;
            this.card_show_recipe=false;
        },
        show_interior_card:function(){
            this.card_show_normal=false;
            this.card_show_battle=false;
            this.card_show_interior=true;
            this.card_show_recipe=false;
        },
        show_recipe_card:function(){
            this.card_show_normal=false;
            this.card_show_battle=false;
            this.card_show_interior=false;
            this.card_show_recipe=true;
        }
    }
}
</script>

<style>
.post-card{
    margin: 30px auto;
}
.normal-card-transition-enter-active,.normal-card-transition-leave-active{
    transition: opacity 1s,transform 1s;
}
.normal-card-transition-enter{
    opacity: 0;
    transform: translateX(-70px);
}
.normal-card-transition-leave-to{
    opacity: 0;
    transform: translateX(70px);
}

.battle-card-transition-enter-active,.battle-card-transition-leave-active{
    transition: opacity 1s,transform 1s;
}
.battle-card-transition-enter{
    opacity: 0;
    transform: translateX(-70px);
}
.battle-card-transition-leave-to{
    opacity: 0;
    transform: translateX(70px);
}

.interior-card-transition-enter-active,.interior-card-transition-leave-active{
    transition: opacity 1s,transform 1s;
}
.iterior-card-transition-enter{
    opacity: 0;
    transform: translateX(-70px);
}
.interior-card-transition-leave-to{
    opacity: 0;
    transform: translateX(70px);
}

.recipe-card-transition-enter-active,.recipe-card-transition-leave-active{
    transition: opacity 1s,transform 1s;
}
.recipe-card-transition-enter{
    opacity: 0;
    transform: translateX(-70px);
}
.recipe-card-transition-leave-to{
    opacity: 0;
    transform: translateX(70px);
}
</style>