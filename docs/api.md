# API

## 侧边栏展开/折叠
``` js
import { isCollapse, toggleCollapse } from 'cub-admin';
```

## 主题色
``` js
import { primaryColor, setPrimaryColor } from 'cub-admin';

// 打印当前主题色
console.log(primaryColor.value);

// 设置主题色， 注意无法直接使用 `primaryColor.value = 'red'` 来进行修改
setPrimaryColor('red');
```

## 主题模式
``` js
import { themeMode, setThemeMode } from 'cub-admin';

// 打印当前主题模式类型
console.log(themeMode.value);

// 设置主题模式， 注意无法直接使用 `themeMode.value = 'light'` 来进行修改
setThemeMode('light'); // 'light' | 'dark' | 'system'
```

## tagsView 标签栏
``` js
// 待补充
```

## 缓存
``` js
// 待补充
```

## 菜单
``` js
// 待补充
```
