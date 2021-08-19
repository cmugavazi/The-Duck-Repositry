<template>
    <div id="main">
        <h1> Please submit the most accurate information to your ability </h1>
        <b-form class="userForm">
            <b-form-group id="fieldset-1" label="What time did you feed the ducks" label-for="feedingTime">
                <b-form-datepicker id="feedingTime" v-model="feedingTime"></b-form-datepicker>
            </b-form-group>
            <b-form-group id="fieldset-1" label="What type of food did you feed the ducks" label-for="food">
                <b-form-input id="food" v-model="food"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Where did you feed the ducks" label-for="location">
                <b-form-input id="location" v-model="location"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="How many ducks were there" label-for="duckQty">
                <b-form-spinbutton id="duckQty" v-model="duckQty" min="1" max="100" placeholder="0"></b-form-spinbutton>
            </b-form-group>
            <b-form-group id="fieldset-1" label="How much food did the ducks eat? (in grams)" label-for="foodAmount">
                <b-form-spinbutton id="foodAmount" v-model="foodAmount" min="1" max="1000" placeholder="0"></b-form-spinbutton>
            </b-form-group>
            <b-button variant="primary" type="submit" v-on:click="submitInfo(`${feedingTime}`, `${food}`, `${location}`, `${duckQty}`, `${foodAmount}`)">Submit</b-button>
        </b-form>

    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        //takes user inputs and uses them as request for the post api
        submitInfo(feedingTime, food, location, duckQty, foodAmount){
            axios.post('http://localhost:5000/addDucks', {
                feedingTime: feedingTime,
                foodType: food,
                duckLocation: location,
                numOfDucks: duckQty,
                foodQty: foodAmount
            });
            alert("Thank you for your submission!");
        }
    },
    data() {
        return {
            feedingTime: '',
            food: '',
            location: '',
            duckQty: '',
            foodAmount: ''
        }
    }
   
}
</script>

<style scoped>
#main {
}
.userForm {
    margin: 250px;
    margin-top: 20px;
    padding: 10px;
    box-shadow: 10px 5px 10px 10px rgba(0, 0, 0, 0.2);
}

</style>