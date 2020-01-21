<template>
  <div id="app" class="container">
    <h1>Pull Request Copy</h1>
    <Button @handleClick="onCopy()">COPY</Button>
    <h2>Configuration</h2>

    <dl>
      <dt>To:</dt>
      <dd>
        <InputText v-model="prc.to" placeholder="ex. @here" />
      </dd>
      <dt>Message:</dt>
      <dd>
        <TextArea
          rows="3"
          placeholder="ex. please review this pull request :smile:"
          v-model="prc.message"
        ></TextArea>
      </dd>
      <dt>Template for copy:</dt>
      <dd>
        <TextArea
          rows="5"
          placeholder="{TO} {MESSAGE} {PR_TITLE} {PR_URL} are constants."
          v-model="prc.customTemplate"
        ></TextArea>
      </dd>

      <div class="col2">
        <dt>
          <label for="autoCopy">Auto copy:</label>
        </dt>
        <dd>
          <InputCopy v-model="prc.autoCopy" />
        </dd>
      </div>
      <dt>Hints:</dt>
      <dd>
        <ul>
          <li>If you turn on auto copy, it will be copied automatically when the pull request page is displayed.</li>
          <li>
            You can customize the template of copying. Do not change the following constant names.
            <ul>
              <li>{TO} is replace value of To</li>
              <li>{MESSAGE} is replace value of Message</li>
              <li>{PR_TITLE} is replace value of pull request page's title</li>
              <li>{PR_URL} is replace value of pull request page's url</li>
            </ul>
          </li>
        </ul>
      </dd>
    </dl>
    <footer class="col2">
      <Button @handleClick="onSave()">SAVE</Button>
      <Button @handleClick="onReset()">RESET</Button>
    </footer>
  </div>
</template>

<script>
import TextArea from "./components/TextArea";
import InputCopy from "./components/InputCopy";
import InputText from "./components/InputText";
import Button from "./components/Button";
import { SETTING } from "./constants/SETTING";

export default {
  components: {
    TextArea,
    InputCopy,
    InputText,
    Button
  },
  data() {
    return {
      prc: Object.assign({}, SETTING)
    };
  },
  created: function() {
    const _self = this;
    chrome.storage.local.get("prc", function(result) {
      if (!Object.keys(result).length) {
        result = _self;
      }

      _self.prc.organization = result.prc.organization;
      _self.prc.repository = result.prc.repository;
      _self.prc.to = result.prc.to;
      _self.prc.message = result.prc.message;
      _self.prc.autoCopy = result.prc.autoCopy;
      _self.prc.useCustomTemplate = result.prc.useCustomTemplate;
      _self.prc.customTemplate = result.prc.customTemplate;
    });
  },
  methods: {
    onCopy() {
      const _data = {
        to: this.prc.to,
        message: this.prc.message,
        customTemplate: this.prc.customTemplate
      };
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        _data.title = tabs[0].title;
        _data.url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, _data);
      });
    },
    onSave() {
      console.log("onSave", this.prc);
      const saveData = {
        prc: {
          organization: "",
          repository: "",
          to: this.prc.to,
          message: this.prc.message,
          autoCopy: this.prc.autoCopy,
          useCustomTemplate: this.prc.useCustomTemplate,
          customTemplate: this.prc.customTemplate
        }
      };

      chrome.storage.local.set(saveData);
      this.onCopy();
    },
    onReset() {
      console.log("assign", Object.assign({}, SETTING));
      this.prc = Object.assign({}, SETTING);
      console.log("onReset", this.prc);
      this.onSave();
    }
  }
};
</script>

<style scope>
h1 {
  margin: 0 0 1rem;
  background-color: #efeeee;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #323e70;
}

h2 {
  font-size: 1rem;
  margin: 0 0 1rem;
  text-align: center;
}

dl {
  margin: 0.5rem;
}

dt {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

dd {
  margin: 0 0 1rem;
}

dd:last-child {
  margin-bottom: 0;
}

dd ul {
  margin: 0;
  padding: 0.5rem;
  line-height: 1.5;
}

dd ul li {
  margin: 0 0 0.5rem 0.5rem;
}

dd li:last-child {
  margin-bottom: 0;
}

.col2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

footer {
  background-color: #efeeee;
  padding: 0.8rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
}

footer button {
  margin: 0 0 0 1rem;
  width: calc(50% - 0.5rem);
}

footer button:nth-child(2n -1) {
  margin-left: 0;
}
</style>