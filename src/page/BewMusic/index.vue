<template>
  <div class="container-fluid">
    <div class="Video row" :class="{ Video_show: isShow }" @click.self="hide">
      <video id="videoTag" :src="MvUrl" autoplay controls loop></video>
    </div>
    <div class="Header row">
      <div class="col-lg-4 col-xs-12" id="Clothing">
        <a href="#" title="当前页面 · BEWMusic">
          <img :src="Music.left" />
          BEW Clothing
        </a>
      </div>
      <div class="col-lg-4 col-xs-12" id="Music">
        <a href="#"
          ><b>{{ Music.title }}</b></a
        >
      </div>
      <div class="InputGroup col-lg-4 col-xs-12">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="query"
            @keydown.enter="searchMusic"
            aria-describedby="basic-addon2"
          />
          <span
            class="input-group-addon"
            id="basic-addon2"
            @click="searchMusic"
          >
            <img :src="Music.search" />
          </span>
        </div>
      </div>
    </div>
    <div class="Content row">
      <div class="col-lg-4 col-xs-12" id="style-1">
        <ul>
          <li v-for="(item, index) in musicList" :key="index" class="MusicLi">
            <img :src="Music.play2" @click="playMusic(item.id, index)" />
            <span>{{ item.name }} - {{ item.artists[0].name }}</span>
            <img
              :src="Music.mv"
              v-if="item.mvid != 0"
              @click="playMv(item.mvid)"
            />
          </li>
        </ul>
      </div>
      <div class="col-lg-4 col-xs-12">
        <img
          :src="musicImage"
          class="musicImage"
          :class="{ pauseimg: ispauseimg }"
        />
      </div>
      <div class="col-lg-4 col-xs-12" id="style-1">
        <div id="rtl_div">
          <ul>
            <li v-for="(im, ix) in userComment" :key="ix">
              <div id="User">
                <img
                  :src="im.user.avatarUrl"
                  id="UserAvatar"
                  @click="playMusic(item.id)"
                />
                {{ im.user.nickname }}
              </div>
              <p>
                <span>{{ im.content }}</span>
                <span>{{ im.timeStr }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Footer row">
      <audio
        id="audioTag"
        :src="musicUrl"
        @play="play"
        @pause="pause"
        autoplay
        @loadedmetadata="transTime"
      ></audio>
      <div class="pgs">
        <img
          :src="Music.background"
          id="changeSchedule"
          @click="changeSchedule"
        />
        <div
          class="pgs-play"
          id="progress"
          :style="{ width: pgsWidth + '%' }"
        ></div>
      </div>
      <div class="message" v-show="message">
        <p>{{ playimgTime }}</p>
        <button @click="changePlay" class="btn btn-animate">
          <img :src="playPause" />
        </button>
        <p>
          {{ audioTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "BewMusic",
  data() {
    return {
      query: "偏爱",
      musicList: [],
      musicImage: "",
      musicUrl: "",
      strUrl1: "music.163.com/song/media/outer/url?id=",
      strUrl2: ".mp3",
      userComment: [],
      ispauseimg: false,
      MvUrl: "",
      isShow: true,
      playimgTime: "00:00",
      playPause: "",
      audioTime: "00:00",
      pgsWidth: "",
      message: false,
      musicIndex: 5,
    };
  },
  mounted() {
    this.$store.dispatch("bewmusic/Music");
    const audio = document.querySelector("#audioTag");
    // timeupdate事件是在播放位置改变时触发
    audio.ontimeupdate = () => {
      this.updateProgress();
    };
    audio.onended = () => {
      this.audioEnded();
    };
    this.searchMusic();
  },
  computed: {
    ...mapState("bewmusic", ["Music"]),
  },
  methods: {
    //歌曲列表
    searchMusic() {
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
        function (response) {
          // console.log(response.data.result.songs);
          that.musicList = response.data.result.songs;
        },
        function (err) {
          console.log(err);
        }
      );
    },
    //歌曲url、封面、评论
    playMusic(musicId, index) {
      this.message = true;
      this.musicIndex = index;
      var that = this;
      this.musicUrl =
        "https://music.163.com/song/media/outer/url?id=" + musicId + ".mp3";

      //歌曲封面
      axios.get("https://api.paugram.com/netease/?id=" + musicId).then(
        function (response) {
          // console.log(response.data.cover);
          that.musicImage = response.data.cover;
        },
        function (err) {
          console.log(err);
        }
      );

      //歌曲评论
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
        function (respontse) {
          // console.log(respontse.data.hotComments);
          that.userComment = respontse.data.hotComments;
        },
        function (err) {
          console.log(err);
        }
      );
    },
    play() {
      this.ispauseimg = false;
      // console.log('play-播放', this.ispauseimg);
    },
    pause() {
      this.ispauseimg = true;
      // console.log('pause-暂停', this.ispauseimg);
    },
    //获取Mv的地址
    playMv(mvid) {
      var that = this;
      const audio = document.querySelector("#audioTag");
      audio.pause();
      that.isShow = false;
      that.ispauseimg = true;
      this.playPause = this.Music.play;
      axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
        function (respontse) {
          // console.log(respontse.data.data.url);
          that.MvUrl = respontse.data.data.url;
          // console.log('歌曲pause-暂停', that.ispauseimg);
        },
        function (err) {
          console.log(err);
        }
      );
    },
    hide() {
      const video = document.querySelector("#videoTag");
      video.pause();
      this.isShow = true;
    },
    transTime() {
      const audio = document.querySelector("#audioTag");
      //加载出来的那瞬间音乐是关闭的
      // console.log('当前音乐是关闭的吗？', audio.paused);
      this.playPause = audio.paused ? this.Music.suspend : this.Music.play;
      var minute = Math.round(parseInt(audio.duration) / 60) + "";
      var second = Math.round(parseInt(audio.duration) % 60) + "";
      minute = minute.length == 1 ? "0" + minute : minute;
      second = second.length == 1 ? "0" + second : second;
      this.audioTime = minute + ":" + second;
      // console.log(this.audioTime);
    },
    changePlay() {
      const audio = document.querySelector("#audioTag");
      //改变暂停/播放
      // console.log('当前音乐是关闭的吗？', audio.paused);
      if (audio.paused) {
        audio.play();
        // console.log('当前音乐正在播放');
        this.playPause = this.Music.suspend;
      } else {
        audio.pause();
        // console.log('当前音乐已关闭');
        this.playPause = this.Music.play;
      }
    },
    updateProgress() {
      // timeupdate事件是在播放位置改变时触发
      // console.log('updateProgress已经触发了');
      const audio = document.querySelector("#audioTag");
      // console.log(audio.currentTime);
      // 总数*100.0 保留小数
      var value = Math.round(
        (Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100.0
      );
      // console.log(value);
      this.pgsWidth = value * 0.907;
      var playTimeM = Math.floor(parseInt(audio.currentTime) / 60) + "";
      var playTimeS = Math.floor(parseInt(audio.currentTime) % 60) + "";
      playTimeM = playTimeM.length == 1 ? "0" + playTimeM : playTimeM;
      playTimeS = playTimeS.length == 1 ? "0" + playTimeS : playTimeS;
      this.playimgTime = playTimeM + ":" + playTimeS;
    },
    changeSchedule(e) {
      const audio = document.querySelector("#audioTag");
      const pgsWidth = document.querySelector("#changeSchedule").width;
      var rate = e.offsetX / pgsWidth;
      audio.currentTime = audio.duration * rate;
      // this.updateProgress();
    },
    audioEnded() {
      // console.log('音乐播放完成');
      const audio = document.querySelector("#audioTag");
      audio.currentTime = 0;
      audio.pause();
      this.playPause = this.Music.play;
      this.playimgTime = "00:00";
    },
  },
  watch: {
    musicIndex(newValue, oldValue) {
      // console.log('isHot被修改了');
      // console.log('改之后的值：' + newValue);
      // console.log('改之前的值：' + oldValue);
      var MusicLi = document.getElementsByClassName("MusicLi");
      MusicLi[newValue].style.color = "red";
      MusicLi[oldValue].style.color = "#777777";
    },
  },
  // ---
};
</script>

<style scoped lang="less">
.Video {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 98;

  video {
    height: 80vh;
    position: relative;
    z-index: 99;
  }
}

.Video_show {
  display: none !important;
}

.Header {
  padding: 10px 50px;
  font-family: lv;
  color: #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;

  #Clothing {
    a {
      display: inline-block;
      /* color: #19110B; */
      color: #777777;
      text-decoration: none;
      transition: all linear 0.5s;
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid #19110b;
    }

    img {
      position: relative;
      top: -1px;
      margin-right: 12px;
    }
  }

  #Music {
    font-size: xx-large;
    font-family: lv;
    letter-spacing: 2px;
    text-align: center;

    a {
      color: #19110b;
      text-decoration: none;
    }
  }

  .InputGroup {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;

    input {
      border-radius: 30px 0 0 30px;
      outline: none;
      box-shadow: none;
      border: 2px solid #e7e7e7;
      border-right: none;
    }

    .input-group-addon {
      background-color: #ffffff;
      border-radius: 0 30px 30px 0;
      outline: none;
      border: 2px solid #e7e7e7;
      border-left: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .Header #Clothing {
    display: none;
  }

  .Header #Music {
    font-size: large;
    text-align: left;
    letter-spacing: 0px;
  }
}

.Content {
  margin-top: 20px;
  margin-bottom: 20px;
}

.Content > div {
  height: 72vh;
  box-sizing: border-box;
  overflow-y: auto;
}

.Content > div:first-child {
  padding-left: 40px;
  color: #777777;
}

.Content > div:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
}

.Content > div:last-child {
  padding: 0px 30px 0 25px;
  direction: rtl;
  unicode-bidi: bidi-override;
  color: #777777;
}

.Content > div:last-child #rtl_div {
  direction: initial;
}

.Content > div:nth-child(2) .musicImage {
  padding: 0;
  width: 50%;
  border-radius: 50%;
  animation: spin 10s linear 0s infinite normal forwards;
  animation-play-state: running;
  /* 动画keyframes名、完成一次动画时间、动画的速度变化类型、播放前延迟时间、播放次数、动画播放方向、动画停在最后一帧 */
}

/* 动画暂停属性 */
.Content > div:nth-child(2) img.pauseimg {
  animation-play-state: paused;
}

@media screen and (min-width: 100px) and (max-width: 768px) {
  .Content > div:nth-child(2) {
    height: 50vh;
  }

  .Content > div:nth-child(2) .musicImage {
    width: 70%;
  }
}

.Content div ul {
  padding: 0;
}

.Content div ul li {
  padding: 0;
  list-style: none;
  font-size: xx-small;
  line-height: 40px;
}

.Content > div:last-child ul li #UserAvatar {
  width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 50%;
}

.Content > div:first-child ul li span {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}

.Content > div:last-child ul li p > span:first-child {
  display: block;
  padding-left: 53px;
  line-height: 25px;
}

.Content > div:last-child ul li p > span:last-child {
  display: block;
  text-align: right;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

#style-1::-webkit-scrollbar-track {
  background: transparent;
}

#style-1::-webkit-scrollbar {
  width: 1px;
  background: transparent;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #e7e7e7;
}

.Footer {
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Footer .pgs {
  width: 100%;
  height: 4px;
  line-height: 0;
  background-color: #e3e8ee;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.Footer .pgs-play {
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 4.65%;
  background-color: #777777;
  z-index: 1;
}

.Footer .pgs > img {
  width: 90.7%;
  height: 6px;
  position: relative;
  top: -1px;
  z-index: 2;
}

.Footer .message {
  margin-top: 20px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

.Footer .message p {
  letter-spacing: 2px;
  font-size: xx-small;
  color: #777777;
}

.Footer .message .btn-animate {
  width: 20%;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 1s linear;
}
</style>
