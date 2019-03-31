import Vue from 'vue';

const skill = {
    template:"#skill",
    props:{
        skillName: String,
        skillPersent: Number
    },

    methods:{
        drawCircle(){
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            ); 

        const persent = (dashArray / 100)*(100 - this.skillPersent);
        circle.style.strokeDashoffset = persent;
        }
    },

    mounted(){
        this.drawCircle();
    }
};


const skillsRow = {
    template:"#skills-row",
    components:{
        skill
    },

    props:{
        skillRowObject:Object
    }
};

new Vue({
  el: "#skills-component",
  template:"#skills-list",

  data:{
      skillsData: {}
  },

  components:{
      skillsRow
  },

  created(){
      const data = require ("../data/skills.json");
      this.skillsData = data;
  }
  
});