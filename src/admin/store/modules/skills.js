export default{
    namespaced: true,
    state:{
        skills:[]
    },

    mutations:{
        SET_SKILLS: (state, skills) => {
            state.skills = skills
        }
    },
    actions:{
        async addSkill({commit},skill){
            try {
                const response = await this.$axios.post('/skills', skill);
                return response
            } catch (error) {
                //error handling
            }
        },

        async fetchSkills({commit},skill){
            try {
                const response = await this.$axios.get('/skills/user', skill);
                commit('SET_SKILLS', response.data)
                return response
            } catch (error) {
                //error handling
            }
        }
    }
}