<template>
    <div id="app" class="container">
        <h1>My Counter</h1>
        <Button>COPY</Button>
        <h2>Configuration</h2>
        <dl>
          <dt>To:{{prc[0].to}}</dt>
          <dd><input type="text" id="toText" v-model="prc[0].to" placeholder="ex. @here" /></dd>
          <dt>Message:{{prc[0].message}}</dt>
          <dd><textarea id="bodyText" rows="3" v-model="prc[0].message" placeholder="ex. please review this pull request :smile:"></textarea></dd>
          <dt>Template for copy:</dt>
          <dd><textarea id="tmp" rows="5"></textarea></dd>
          <div class="col2-2">
            <dt><label for="autoCopy">Auto copy:</label></dt>
            <dd>
              <label for="autoCopy">
                <input type="checkbox" id="autoCopy" />
                <span>ON</span>
              </label>
            </dd>
          </div>
        </dl>
        <Button>SAVE</Button>
        <Button @handleClick="onReset()">RESET</Button>

        <hr>
        <p class="count">{{ prc.length }}</p>
        <Btn class="green" @handleCount="doCount('down')">Down</Btn>
    </div>
</template>

<script>
import Btn from "./Btn"
import Button from "./Button"
import  { SETTING }  from './constants/SETTING'

export default {
    components: {
        Btn,
        Button
    },
    data () {
        return {
            prc: [{
              organization: 'a',
              repository: '',
              to: '',
              message: '',
              autoCopy: false,
              useCustomTemplate: false,
              customTemplate: '{TO}\n{MESSAGE}\n{PR_TITLE}\n{PR_URL}'
            }],
        }
    },
    created:() =>  {
      console.log('created')
    },
    methods: {
        doCount(countType) {
            this.count += (countType === "up" ? 1 : -1)
        },
        onReset() {
          this.prc[0] = SETTING
        },
        onSetTo(e) {
          this.prc[0].to = e.value;
          console.log(this.prc[0])
        }
    },
}
</script>

<style scope>
  h1 {
    margin: 0 0 1.5rem;
    background-color: #efeeee;
    text-align: center;
    box-shadow: 6px 6px 16px #d1cdc7;
    padding: 0.5rem;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  h2 {
    text-align: center;
  }
</style>