<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// 默认不展示商品列表
const isShowCategoryList = ref(false)

// 鼠标移入，商品分类进行展示
const enterShow = () => {
  if (route.path === '/home') {
    isShowCategoryList.value = true
  }
}

const route = useRoute()

// 鼠标离开，商品分类列表隐藏
const leaveShow = () => {
  isShowCategoryList.value = false
}

// ##todo
// 服务器写好后，动态遍历数据，丝滑过渡（防抖节流）
</script>
<template>
  <div class="type_nav">
    <div class="type_nav_navigate" @mouseleave="leaveShow" @mouseenter="enterShow">
      <h2>全部商品分类</h2>
      <ul class="type_list" v-show="isShowCategoryList">
        <li class="type_list_item">
          <a href="###">
            图书、音像、数字商品
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            家用电器
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书1</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            手机、数码、充值
            <div class="type_list_item_subitemList">
              <ul>
                <li>充值</li>
                <li>充值</li>
              </ul>
              <ul>
                <li>电子书2</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            电脑、办公
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书1</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            家居、家具、家装、厨具
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书4</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            服饰内衣
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书5</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            个护化妆
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书6</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
              <ul>
                <li>教育</li>
                <li>教材教辅</li>
                <li>考试</li>
                <li>外语学习</li>
              </ul>
              <ul>
                <li>其他</li>
                <li>英文原版书</li>
                <li>港台图书</li>
                <li>工具书</li>
                <li>套装书</li>
                <li>杂志/期刊</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            运动健康
            <div class="type_list_item_subitemList">
              <ul>
                <li>电子书1</li>
                <li>免费</li>
                <li>小说</li>
                <li>励志与成功</li>
                <li>婚恋/两性</li>
                <li>文学</li>
                <li>经管</li>
                <li>畅读VIP</li>
              </ul>
              <ul>
                <li>数字音乐</li>
                <li>通俗流行</li>
                <li>古典音乐</li>
                <li>摇滚说唱</li>
                <li>爵士蓝调</li>
                <li>乡村民谣</li>
                <li>有声读物</li>
              </ul>
              <ul>
                <li>音像</li>
                <li>音乐</li>
                <li>影视</li>
                <li>教育音像</li>
                <li>游戏</li>
              </ul>
              <ul>
                <li>文艺</li>
                <li>小说</li>
                <li>文学</li>
                <li>青春文学</li>
                <li>传记</li>
                <li>艺术</li>
              </ul>
              <ul>
                <li>人文社科</li>
                <li>历史</li>
                <li>心理学</li>
                <li>政治/军事</li>
                <li>国学/古籍</li>
                <li>哲学/宗教</li>
                <li>社会科学</li>
              </ul>
              <ul>
                <li>经管励志</li>
                <li>经济</li>
                <li>金融与投资</li>
                <li>管理</li>
                <li>励志与成功</li>
              </ul>
              <ul>
                <li>家庭与育儿</li>
                <li>旅游/地图</li>
                <li>烹饪/美食</li>
                <li>时尚/美妆</li>
                <li>家居</li>
                <li>婚恋与两性</li>
              </ul>
              <ul>
                <li>科技</li>
                <li>科普</li>
                <li>IT</li>
                <li>建筑</li>
                <li>医学</li>
                <li>工业技术</li>
                <li>电子/通信</li>
                <li>农林</li>
                <li>科学与自然</li>
              </ul>
              <ul>
                <li>少儿</li>
                <li>少儿</li>
                <li>0-2岁</li>
                <li>3-6岁</li>
                <li>7-10岁</li>
                <li>11-14岁</li>
              </ul>
            </div>
          </a>
        </li>
        <li class="type_list_item">
          <a href="###">
            汽车用品
          </a>
        </li>
        <li class="type_list_item"><a href="###">彩票、旅行</a></li>
        <li class="type_list_item"><a href="###">理财、众筹</a></li>
        <li class="type_list_item"><a href="###">母婴、玩具</a></li>
        <li class="type_list_item"><a href="###">箱包</a></li>
        <li class="type_list_item"><a href="###">运动户外</a></li>
        <li class="type_list_item"><a href="###">箱包</a></li>
      </ul>
    </div>
    <nav>
      <a href="###">服装城</a>
      <a href="###">美妆馆</a>
      <a href="###">尚品汇超市</a>
      <a href="###">全球购</a>
      <a href="###">闪购</a>
      <a href="###">团购</a>
      <a href="###">有趣</a>
      <a href="###">秒杀</a>
    </nav>
  </div>
</template>
<style lang="less">
.type_nav {
  padding: 0 130px;
  margin-top: 20px;
  border-bottom: 2px solid #e1251b;
  //   position: relative;

  &_navigate {
    display: flex;
    min-width: 940px;
    align-items: center;
    margin-bottom: -34px;
    position: relative;

    &>h2 {
      width: 210px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: #e1251b;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .type_list {
      width: 170px;
      height: 460px;
      padding: 0 20px;
      position: absolute;
      top: 44px;
      list-style: none;
      background: #fafafa;
      z-index: 3;

      &>li {
        &>a {
          text-decoration: none;
          color: #333;
          font-size: 14px;
          font-weight: 400;
          line-height: 30px;

          &:hover {
            .type_list_item_subitemList {
              display: block;
            }
          }
        }

        .type_list_item_subitemList {
          display: none;
          position: absolute;
          left: 210px;
          top: 0;
          width: 734px;
          min-height: 460px;
          background: #f7f7f7;

          &>ul {
            list-style: none;
            display: flex;
            padding: 20px 0 0 14px;

            &>li {
              border-right: 1px solid black;
              padding: 0 8px;
              height: 16px;
              line-height: 16px;
              color: #666;

              &:first-child {
                color: black;
              }

              &:last-child {
                border: none;
              }
            }
          }
        }
      }
    }
  }

  &>nav {
    margin-left: 210px;

    &>a {
      margin: 0 22px;
      font-size: 16px;
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>