/**
 * Created by 小哥 on 2018-11-19.
 */
import 'muse-ui/lib/styles/base.less';

import {
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Drawer,
  Divider,
  Dialog,
  Grid,
  Icon,
  List,
  Progress,
  Menu,
  SubHeader,
  Tabs,
  TextField
} from 'muse-ui'

const components =  [AppBar, Avatar, Badge, Button, BottomNav, Menu, Progress,Drawer,Dialog, Divider, Grid, Icon, List, SubHeader, Tabs, TextField]

export default {
  // Vue.use会触发一个 名叫install触发并接受Vue对象作为第一个参数
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }

}
