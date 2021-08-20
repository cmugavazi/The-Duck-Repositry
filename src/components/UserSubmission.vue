<template>
    <div id="main">
        <h1>Welcome to the Duck Repository</h1>
        <p>Thank you very much for participating in my study. Whenever you find yourself feeding a flock of ducks, please take note of the date, the food you fed them, the location and how much the ducks were fed.</p>
        <p style="color: red">{{message}}</p>
        <b-form class="userForm">
            <b-form-group id="fieldset-1" label="Date" label-for="feedingTime">
                <b-form-datepicker  id="feedingTime" v-model="feedingTime" :max="max" placeholder="What day did you feed the ducks"></b-form-datepicker>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Food" label-for="food">
                <b-form-input id="food" v-model="food" required></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Where did you feed the ducks" label-for="location">
                <b-form-input id="location" v-model="location" required></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="How many ducks were there" label-for="duckQty">
                <b-form-spinbutton id="duckQty" v-model="duckQty" min="1" max="100" placeholder="0" required></b-form-spinbutton>
            </b-form-group>
            <b-form-group id="fieldset-1" label="How much food did the ducks eat? (in grams)" label-for="foodAmount">
                <b-form-spinbutton id="foodAmount" v-model="foodAmount" min="1" max="1000" placeholder="0" required></b-form-spinbutton>
            </b-form-group>
            <b-button variant="primary" type="submit" v-on:click="submitInfo(`${feedingTime}`, `${food}`, `${location}`, `${duckQty}`, `${foodAmount}`)">Submit</b-button>
        </b-form>

    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        //takes user inputs and uses them as params for the post api
        submitInfo(feedingTime, food, location, duckQty, foodAmount){
            //if a field is not completed, the user cannot submit
            if (feedingTime.length == 0 || food.length == 0 || location.length == 0){
                return this.message = "*Please complete form before submission*";
            }else {
            axios.post('http://localhost:5000/addDucks', {
                feedingTime: feedingTime,
                foodType: food,
                duckLocation: location,
                numOfDucks: duckQty,
                foodQty: foodAmount
            });
            alert("Thank you for your contribution!");
            }
        }
    },
    data() {
         const today = new Date();
         //ensures user cannot input a future date in the calendar
         const maxDate = new Date(today);
        return {
            feedingTime: '',
            food: '',
            location: '',
            duckQty: '',
            foodAmount: '',
            message: '',
            max: maxDate
        }
    },
   
}
</script>

<style scoped>
#main {
    
}
.userForm {
    margin: 250px;
    margin-top: 20px;
    padding: 100px;
    padding-top: 50px;
    box-shadow: 10px 5px 10px 10px rgba(0, 0, 0, 0.2);

}

</style>