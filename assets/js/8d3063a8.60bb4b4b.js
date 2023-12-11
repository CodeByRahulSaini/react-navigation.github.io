"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[12305],{11426:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(85893),a=r(11151);const i={id:"multiple-drawers",title:"Multiple drawers",sidebar_label:"Multiple drawers"},o=void 0,s={id:"multiple-drawers",title:"Multiple drawers",description:"Sometimes we want to have multiple drawers on the same screen",source:"@site/versioned_docs/version-7.x/multiple-drawers.md",sourceDirName:".",slug:"/multiple-drawers",permalink:"/docs/7.x/multiple-drawers",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/multiple-drawers.md",tags:[],version:"7.x",frontMatter:{id:"multiple-drawers",title:"Multiple drawers",sidebar_label:"Multiple drawers"},sidebar:"docs",previous:{title:"Opening a modal",permalink:"/docs/7.x/modal"},next:{title:"Screen options with nested navigators",permalink:"/docs/7.x/screen-options-resolution"}},c={},d=[{value:"Using <code>react-native-drawer-layout</code>",id:"using-react-native-drawer-layout",level:2},{value:"Nesting 2 drawer navigators",id:"nesting-2-drawer-navigators",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sometimes we want to have multiple drawers on the same screen: one on the left and one on the right. This can be achieved in 2 ways:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["By using ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-layout",children:(0,t.jsx)(n.code,{children:"react-native-drawer-layout"})})," directly (Recommended)."]}),"\n",(0,t.jsxs)(n.li,{children:["By ",(0,t.jsx)(n.a,{href:"/docs/7.x/nesting-navigators",children:"nesting"})," 2 ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-navigator",children:"drawer navigators"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"using-react-native-drawer-layout",children:["Using ",(0,t.jsx)(n.code,{children:"react-native-drawer-layout"})]}),"\n",(0,t.jsx)(n.p,{children:"When we have multiple drawers, only one of them shows the list of screens. The second drawer may often be used to show some additional information such as the list of users etc."}),"\n",(0,t.jsxs)(n.p,{children:["In such cases, we can use ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-layout",children:(0,t.jsx)(n.code,{children:"react-native-drawer-layout"})})," directly to render the second drawer. The drawer navigator will be used to render the first drawer and can be nested inside the second drawer:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { Drawer } from 'react-native-drawer-layout';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.openDrawer()} title=\"Open drawer\" />\n    </View>\n  );\n}\n\nconst LeftDrawer = createDrawerNavigator();\n\nconst LeftDrawerScreen = () => {\n  return (\n    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>\n      <LeftDrawer.Screen name=\"Home\" component={HomeScreen} />\n    </LeftDrawer.Navigator>\n  );\n};\n\nfunction RightDrawerScreen() {\n  const [letDrawerOpen, setLeftDrawerOpen] = React.useState(false);\n\n  return (\n    <Drawer\n      open={rightDrawerOpen}\n      onOpen={() => setRightDrawerOpen(true)}\n      onClose={() => setRightDrawerOpen(false)}\n      drawerPosition=\"right\"\n      renderDrawerContent={() => <>{/* Right drawer content */}</>}\n    >\n      <LeftDrawerScreen />\n    </Drawer>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RightDrawerScreen />\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But there is one problem. When we call ",(0,t.jsx)(n.code,{children:"navigation.openDrawer()"})," in our ",(0,t.jsx)(n.code,{children:"HomeScreen"}),", it always opens the left drawer. We don't have access to the right drawer via the ",(0,t.jsx)(n.code,{children:"navigation"})," prop since it's not a navigator."]}),"\n",(0,t.jsx)(n.p,{children:"To solve this, we need to use context API to pass down a function to control the right drawer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { Drawer } from 'react-native-drawer-layout';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst RightDrawerContext = React.createContext();\n\nfunction HomeScreen({ navigation }) {\n  const { openRightDrawer } = React.useContext(RightDrawerContext);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.openDrawer()}\n        title=\"Open left drawer\"\n      />\n      <Button onPress={() => openRightDrawer()} title=\"Open right drawer\" />\n    </View>\n  );\n}\n\nconst LeftDrawer = createDrawerNavigator();\n\nconst LeftDrawerScreen = () => {\n  return (\n    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>\n      <LeftDrawer.Screen name=\"Home\" component={HomeScreen} />\n    </LeftDrawer.Navigator>\n  );\n};\n\nfunction RightDrawerScreen() {\n  const [letDrawerOpen, setLeftDrawerOpen] = React.useState(false);\n\n  const value = React.useMemo(\n    () => ({\n      openRightDrawer: () => setRightDrawerOpen(true),\n      closeRightDrawer: () => setRightDrawerOpen(false),\n    }),\n    []\n  );\n\n  return (\n    <Drawer\n      open={rightDrawerOpen}\n      onOpen={() => setRightDrawerOpen(true)}\n      onClose={() => setRightDrawerOpen(false)}\n      drawerPosition=\"right\"\n      renderDrawerContent={() => <>{/* Right drawer content */}</>}\n    >\n      <RightDrawerContext.Provider value={value}>\n        <LeftDrawerScreen />\n      </RightDrawerContext.Provider>\n    </Drawer>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RightDrawerScreen />\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we are using the ",(0,t.jsx)(n.code,{children:"RightDrawerContext"})," to pass down the ",(0,t.jsx)(n.code,{children:"openRightDrawer"})," function to the ",(0,t.jsx)(n.code,{children:"HomeScreen"}),". Then we use ",(0,t.jsx)(n.code,{children:"openRightDrawer"})," to open the right drawer."]}),"\n",(0,t.jsx)(n.h2,{id:"nesting-2-drawer-navigators",children:"Nesting 2 drawer navigators"}),"\n",(0,t.jsxs)(n.p,{children:["An alternative approach is to nest 2 ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-navigator",children:"drawer navigators"})," inside each other. This is not recommended since it requires creating an additional screen and more nesting - which can make navigating and type checking more verbose. But this can be useful if both navigators include multiple screens."]}),"\n",(0,t.jsx)(n.p,{children:"Here we have 2 drawer navigators nested inside each other, one is positioned on left and the other on the right:"}),"\n",(0,t.jsx)("samp",{id:"multiple-drawers-issue"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.openDrawer()} title=\"Open drawer\" />\n    </View>\n  );\n}\n\nconst LeftDrawer = createDrawerNavigator();\n\nconst LeftDrawerScreen = () => {\n  return (\n    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>\n      <LeftDrawer.Screen name=\"Home\" component={HomeScreen} />\n    </LeftDrawer.Navigator>\n  );\n};\n\nconst RightDrawer = createDrawerNavigator();\n\nconst RightDrawerScreen = () => {\n  return (\n    <RightDrawer.Navigator\n      screenOptions={{ drawerPosition: 'right', headerShown: false }}\n    >\n      <RightDrawer.Screen name=\"HomeDrawer\" component={LeftDrawerScreen} />\n    </RightDrawer.Navigator>\n  );\n};\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RightDrawerScreen />\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But there is one problem. When we call ",(0,t.jsx)(n.code,{children:"navigation.openDrawer()"})," in our ",(0,t.jsx)(n.code,{children:"HomeScreen"}),", it always opens the left drawer since it's the immediate parent of the screen."]}),"\n",(0,t.jsxs)(n.p,{children:["To solve this, we need to use ",(0,t.jsx)(n.a,{href:"/docs/7.x/navigation-prop#getparent",children:(0,t.jsx)(n.code,{children:"navigation.getParent"})})," to refer to the right drawer which is the parent of the left drawer. So our code would look like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<Button onPress={() => navigation.openDrawer()} title="Open left drawer" />\n<Button onPress={() => navigation.getParent().openDrawer()} title="Open right drawer" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["However, this means that our button needs to know about the parent navigators, which isn't ideal. If our button is further nested inside other navigators, it'd need multiple ",(0,t.jsx)(n.code,{children:"getParent()"})," calls. To address this, we can use the ",(0,t.jsxs)(n.a,{href:"/docs/7.x/drawer-navigator#id",children:[(0,t.jsx)(n.code,{children:"id"})," prop"]})," to identify the parent navigator."]}),"\n",(0,t.jsxs)(n.p,{children:["To customize the contents of the drawer, we can use the ",(0,t.jsxs)(n.a,{href:"/docs/7.x/drawer-navigator#drawercontent",children:[(0,t.jsx)(n.code,{children:"drawerContent"})," prop"]})," to pass in a function that renders a custom component."]}),"\n",(0,t.jsx)(n.p,{children:"The final code would look like this:"}),"\n",(0,t.jsx)("samp",{id:"multiple-drawers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.getParent('LeftDrawer').openDrawer()}\n        title=\"Open left drawer\"\n      />\n      <Button\n        onPress={() => navigation.getParent('RightDrawer').openDrawer()}\n        title=\"Open right drawer\"\n      />\n    </View>\n  );\n}\n\nfunction RightDrawerContent() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>This is the right drawer</Text>\n    </View>\n  );\n}\n\nconst LeftDrawer = createDrawerNavigator();\n\nfunction LeftDrawerScreen() {\n  return (\n    <LeftDrawer.Navigator\n      id=\"LeftDrawer\"\n      screenOptions={{ drawerPosition: 'left' }}\n    >\n      <LeftDrawer.Screen name=\"Home\" component={HomeScreen} />\n    </LeftDrawer.Navigator>\n  );\n}\n\nconst RightDrawer = createDrawerNavigator();\n\nfunction RightDrawerScreen() {\n  return (\n    <RightDrawer.Navigator\n      id=\"RightDrawer\"\n      drawerContent={(props) => <RightDrawerContent {...props} />}\n      screenOptions={{\n        drawerPosition: 'right',\n        headerShown: false,\n      }}\n    >\n      <RightDrawer.Screen name=\"HomeDrawer\" component={LeftDrawerScreen} />\n    </RightDrawer.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RightDrawerScreen />\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we are passing ",(0,t.jsx)(n.code,{children:'"LeftDrawer"'})," and ",(0,t.jsx)(n.code,{children:'"RightDrawer"'})," strings (you can use any string here) in the ",(0,t.jsx)(n.code,{children:"id"})," prop of the drawer navigators. Then we use ",(0,t.jsx)(n.code,{children:"navigation.getParent('LeftDrawer').openDrawer()"})," to open the left drawer and ",(0,t.jsx)(n.code,{children:"navigation.getParent('RightDrawer').openDrawer()"})," to open the right drawer."]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To have multiple drawers, you can use ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-layout",children:(0,t.jsx)(n.code,{children:"react-native-drawer-layout"})})," directly in combination with a drawer navigator."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-layout#drawerposition",children:(0,t.jsx)(n.code,{children:"drawerPosition"})})," prop can be used to position the drawer on the right."]}),"\n",(0,t.jsxs)(n.li,{children:["The methods to control the drawer can be passed down using context API when using ",(0,t.jsx)(n.a,{href:"/docs/7.x/drawer-layout",children:(0,t.jsx)(n.code,{children:"react-native-drawer-layout"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When nesting multiple navigators, you can use ",(0,t.jsx)(n.a,{href:"/docs/7.x/navigation-prop#getparent",children:(0,t.jsx)(n.code,{children:"navigation.getParent"})})," in combination with the ",(0,t.jsxs)(n.a,{href:"/docs/7.x/drawer-navigator#id",children:[(0,t.jsx)(n.code,{children:"id"})," prop"]})," to refer to the desired drawer."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);