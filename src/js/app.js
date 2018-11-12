var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

// Vue instance
new Vue({
    el: '#container',
    data: {
        fullRepoName: '',
        username: '',
        repo: '',
        found: false,
        active: false
    },
    methods: {
        toggleActive: function() {
            this.active = this.active ? false : true;
        },
        triggerSubmit: function() {
            this.$els.container

            console.log(this)
            
            // this.$els.repoBtn.click();
        },
        changeRepo: function() {         
            var splitData = this.fullRepoName.split('/');
            this.username = splitData[0];
            this.repo = splitData[1];
        },
        repoFound: function(bool) {
            this.found = bool;
        },
    },
    events: {
        'repoFound': 'repoFound'
    },
    computed: {
        foundRepo: function() {
            return this.found;
        }
    },
    components: {
        githubFileExplorer: require('./components/github-file-explorer')
    }
});
