import { createStore } from 'vuex'
const dataUrl = 'https://aneeqalouw.github.io/dummyVuePortfolioData/data/'
export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    projects:  null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setProjects(state, value){
      state.projects = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
  },
  actions: {
    async fetchAbout(context){
      let result = await fetch(dataUrl)
      let {about} = await result.json()
      context.commit('setAbout', about)
    },
    async fetchEducation(context){
      let result = await fetch(dataUrl)
      let {education} = await result.json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context){
      let result = await fetch(dataUrl)
      let {skills} = await result.json()
      context.commit('setSkills', skills)
    },
    async fetchProjects(context){
      let result = await fetch(dataUrl)
      let {projects} = await result.json()
      context.commit('setProjects', projects)
    },
    async fetchTestimonials(context){
      let result = await fetch(dataUrl)
      let {testimonials} = await result.json()
      context.commit('setTestimonials', testimonials)
    },
  },
  modules: {
  }
})
