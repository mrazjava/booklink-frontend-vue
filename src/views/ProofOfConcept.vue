<template>
  <div class="ProofOfConcept">
    <h2>Proof of Concept</h2>
    <div class="poc-header">
      A set of experiments derived during initial development to test various backend communication concepts. Will be removed from the final version. 
      <a href="">Refresh</a> this page or click a button to get fresh data. Data for each demo is fetched from the <a :href="this.beHost+'/actuator/info'">backend</a> over
      <a :href="this.beHost+'/swagger-ui.html'">REST</a>.
    </div>
    <poc-count class="poc-demo" :count="pocCount" @count-updated="updateCount" />
    <poc-investigator class="poc-demo" :msg="investigatorMsg" @msg-updated="updateInvestigatorMsg" />
    <poc-foo class="poc-demo" :word="fooWord" @word-updated="updateFooWord" />
    <poc-bar class="poc-demo" :text="barText" @text-updated="updateBarText" />
    <poc-hello class="poc-demo" :hello="hello" @hello-updated="updateHello" />
  </div>
</template>

<script>
import Deployment from '@/deployment'
import PocCount from '@/components/poc/PocCount'
import PocInvestigator from '@/components/poc/PocInvestigator'
import PocFoo from '@/components/poc/PocFoo'
import PocBar from '@/components/poc/PocBar'
import PocHello from '@/components/poc/PocHello'

export default {
  name: 'ProofOfConcept',
  components: {
    PocCount,
    PocInvestigator,
    PocFoo,
    PocBar,
    PocHello
  },
  data() {
    return {
      beHost: Deployment.value('FE_DEPLOY_BE_HOST'),
      pocCount: 0,
      investigatorMsg: '?',
      fooWord: '?',
      barText: '?',
      hello: '?'
    }
  },
  methods: {
    updateCount(newValue) {
      this.pocCount = newValue;
    },
    updateInvestigatorMsg(newValue) {
      this.investigatorMsg = newValue;
    },
    updateFooWord(newValue) {
      this.fooWord = newValue;
    },
    updateBarText(newValue) {
      this.barText = newValue;
    },
    updateHello(newValue) {
      this.hello = newValue;
    }
  }
}
</script>

<style>
.ProofOfConcept {
  margin:0;
  padding:0;
}
.poc-element {
  border-radius: 5px;
  border: solid 1px lightgrey;
  padding-left: 10px;
  text-align: left;
}
.poc-title {
}
.poc-title-desc {
  float: right;
  margin-right: 5px;
  color: grey;
}
.poc-header {
  margin-top: 10px;
  margin-bottom: 15px;
}
.poc-demo {
  margin-top: 10px;
}
.poc-display {
  margin-left: 20px;
  font-size: 1.6em;
}
button {
  background-color: lightgrey;
  color: blue;
  padding: 10px;
  border: none;
  width: 100px;
}
button:hover {
  border: none;
}
h2 {
  margin:0;
  margin-top: 40px;
  border-top: dotted 0px grey;
  font-size:1.2em;
}
.poc-footnote {
  color: grey;
  text-align:left;
  font-size: 0.8em;
}
</style>
