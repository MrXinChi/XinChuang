import Vue from 'vue';
import 'vant/lib/index.css';

//按钮
import { Button } from 'vant';
Vue.use(Button);

//Tabbar
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

//轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

//tab标签栏
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

//图标
import { Icon } from 'vant';
Vue.use(Icon);

//图片上传
import { Uploader } from 'vant';
Vue.use(Uploader);

//地区选择
import { Area } from 'vant';
Vue.use(Area);

//遮罩层
import { Overlay } from 'vant';
Vue.use(Overlay);

//单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

//弹出层
import { Popup } from 'vant';
Vue.use(Popup);

//评分
import { Rate } from 'vant';
Vue.use(Rate);

import { Loading } from 'vant';
Vue.use(Loading);
//输入框
import { Field } from 'vant';
Vue.use(Field);
//时间选择
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);

import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);

//图片预览
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

//复选框
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
