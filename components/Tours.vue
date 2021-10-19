<template>
    <div class="tour" id="tour">
        <b-container>
            <h1 class="d-block">PPróximos eventoss</h1>
            <b-row>
                <b-col cols="12" md="6" class="box" v-for="tour in tours" :key="tour.id">
                    <h2>{{ dateFormat(tour.data) }}</h2>
                    <p>{{ tour.local }} - {{ hourFormat(tour.data) }}H</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { format } from 'date-fns'
export default {
    data(){
    return {
      tours: []
    }
  },
    methods: {
        async getTours(){
            this.tours = await this.$api.get('tours')
            this.tours = this.tours.data
        },
        dateFormat(date){
            return format(new Date(date), 'dd/MM')
        },
        hourFormat(date){
            return format(new Date(date), 'HH')
        }
    },
    mounted(){
        this.getTours()
    }
}
</script>