<template>
<div class="menu-area">
    <ul>
        <li><a href="#">Online Rezervasyon</a></li>
        <li><a href="#">

                <date-picker value-type="DD/MM/YYYY" format="DD-MM-YYYY" class="range-picker" v-model="$store.state.date1" type="date" placeholder="Giriş Tarihi" range></date-picker>
            </a></li>

        <li><a href="#">
                <date-picker value-type="DD/MM/YYYY" format="DD-MM-YYYY" class="range-picker" v-model="$store.state.date1" type="date" placeholder="Çıkış Tarihi" range></date-picker>
            </a></li>

        <li><a href="#">Misafirler</a>
        
        <ul class="dropdown-1">
            <li><a href="#">
                
                    <tr>

                        <td><span> Yetişkinler: </span></td>
                        <td>
                            <div class="" style="width: 110px;">
                                <button @click="subtract2()">-</button>
                                <input :value="$store.state.adultCount" type="text" style="width: 50px;">
                                <button @click="increment2()">+</button>

                            </div>
                        </td>
                    </tr>
                </a></li>
            <li><a href="#">
                    <tr>
                        <td><span> Çocuklar:</span> </td>
                        <td>
                            <div class="" style="width: 110px;">
                                <button tabindex="0" type="button" role="button" @click="subtract()" class="">-</button>
                                <input :value="$store.state.childrenCount" style="width: 50px;">
                                <button tabindex="0" type="button" role="button" class="" @click="increment()">+
                                </button>
                            </div>
                        </td>
                    </tr>
                </a></li>
            <div>
                <ul class="dropdown-1">

                    <li v-for="(count,index) in $store.state.childrenCount" :key="index"><a>
                            <tr>
                                <div>
                                    <td><span> {{index+1}}. Çocuk: </span></td>
                                    <td>
                                        <div class="" style="width: 110px;">
                                            <button @click="subtractAge(index)">-</button>
                                            <input :value="$store.state.childrenAge" type="text" style="width: 50px;">
                                            <button @click="addAge(index)">+</button>

                                        </div>
                                    </td>

                                </div>
                            </tr>
                        </a></li>
                </ul>
            </div>

        </ul>
        </li>
        <li><a href="#">Fiyat Listele</a></li>
    </ul>

</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

@Component({
    components: {
        DatePicker
    },
})
export default class Reservation2 extends Vue {

    increment() {
        this.$store.commit('increment')
    }
    subtract() {
        this.$store.commit('subtract')
    }
    increment2() {
        this.$store.commit('increment2')
    }
    subtract2() {
        this.$store.commit('subtract2')
    }
    subtractAge() {
        this.$store.commit('subtractAge')
    }
    addAge() {
        this.$store.commit('addAge');
    }
    addDate() {
        this.$store.commit('addDate');
    }
    dateDivide() {
        this.$store.commit('dateDivide')
    }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto+Condensed&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 1px;

    @media all and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
}

.menu-area a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ivory;
    background: #41B883;
    height: 60px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

}

.menu-area a:hover {
    background: #8A10FF;
    color: ivory;
}

.menu-area ul {
    list-style: none;
    display: flex;
}

.menu-area li {
    position: relative;
    width: 100%;
    text-align: center;
}

.menu-area li:hover .dropdown-1>li {
    display: block;
    top: 0;
}

.dropdown-1 li {
    display: none;
    position: relative;
}

.dropdown-1 {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.dropdown-1 li:hover {
    display: block;
}

#app>div.home>div>ul>li:nth-child(4)>ul>li:nth-child(1)>a>tr>td:nth-child(2)>div>input[type=text] {
    text-align: center;
}

#app>div.home>div>ul>li:nth-child(4)>ul>li:nth-child(2)>a>tr>td:nth-child(2)>div>input {
    text-align: center;
}

#app>div.home>div>ul>li:nth-child(4)>ul>li:nth-child(2)>a>tr>td:nth-child(1)>span {
    letter-spacing: 2.7px !important;
}

#app>div.home>div>ul>li:nth-child(4)>ul>div>ul>li>a>tr>div>td:nth-child(2)>div>input[type=text] {
    text-align: center;
}
</style>
