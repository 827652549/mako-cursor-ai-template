export type Locale = 'zh' | 'en';

export const defaultLocale: Locale = 'zh';
export const locales: Locale[] = ['zh', 'en'];

export const translations = {
  zh: {
    // 通用
    common: {
      loading: '加载中...',
      back: '返回',
      backToHome: '返回首页',
      save: '保存',
      cancel: '取消',
      confirm: '确认',
      delete: '删除',
      edit: '编辑',
      search: '搜索',
      submit: '提交',
    },
    // 首页
    home: {
      welcome: 'Welcome',
      welcomeBack: '欢迎回来，{name}',
      startBuilding: '开始构建你的应用',
      loggedInMessage: '你已经登录，可以进入后台管理',
      signIn: '登录',
      signUp: '注册',
      enterDashboard: '进入后台',
      signOut: '退出登录',
      signingOut: '退出中...',
      viewComponents: '查看组件库',
    },
    // 组件库页面
    components: {
      title: '组件展示',
      description: '浏览所有可用的 shadcn/ui 组件',
      all: '全部',
      categories: {
        all: '全部',
        forms: '表单',
        dataDisplay: '数据展示',
        feedback: '反馈',
        layout: '布局',
        navigation: '导航',
        overlay: '浮层',
      },
      footer: '共 {count} 个组件 • 基于',
      examples: {
        alert: {
          title: '提示',
          description: '你可以使用 CLI 将组件添加到你的应用中。',
          errorTitle: '错误',
          errorDescription: '你的会话已过期。请重新登录。',
        },
        label: {
          email: '邮箱',
        },
        checkbox: {
          terms: '接受条款和条件',
        },
        switch: {
          airplaneMode: '飞行模式',
        },
        radioGroup: {
          default: '默认',
          comfortable: '舒适',
          compact: '紧凑',
        },
        select: {
          placeholder: '选择主题',
          light: '浅色',
          dark: '深色',
          system: '系统',
        },
        card: {
          title: '卡片标题',
          description: '卡片描述',
          content: '卡片内容',
        },
        tabs: {
          account: '账户',
          password: '密码',
          accountContent: '在此更改你的账户信息。',
          passwordContent: '在此更改你的密码。',
        },
        separator: {
          blog: '博客',
          docs: '文档',
          source: '源码',
          description: '一个开源的 UI 组件库。',
        },
        textarea: {
          placeholder: '在此输入您的消息...',
        },
        accordion: {
          q1: '它是否可访问？',
          a1: '是的。它遵循 WAI-ARIA 设计模式。',
          q2: '它是否已样式化？',
          a2: '是的。它带有默认样式，与其他组件的美学相匹配。',
          q3: '它是否已动画化？',
          a3: '是的。默认情况下它是动画的，但如果你愿意，可以禁用它。',
        },
        dialog: {
          button: '打开对话框',
          title: '你确定吗？',
          description: '此操作无法撤销。这将永久删除你的账户并从我们的服务器中删除你的数据。',
        },
        dropdownMenu: {
          button: '打开菜单',
          label: '我的账户',
          profile: '个人资料',
          settings: '设置',
          logout: '退出登录',
        },
        popover: {
          button: '打开弹出框',
          title: '尺寸',
          description: '设置图层的尺寸。',
        },
        tooltip: {
          button: '悬停我',
          content: '添加到库',
        },
      },
      componentDescriptions: {
        button: '显示一个按钮或看起来像按钮的组件。',
        badge: '显示一个徽章或看起来像徽章的组件。',
        alert: '显示一个用于吸引用户注意的提示框。',
        input: '显示一个表单输入字段或看起来像输入的组件。',
        textarea: '显示一个表单文本区域或看起来像文本区域的组件。',
        label: '渲染一个与控件关联的可访问标签。',
        checkbox: '允许用户在选中和未选中状态之间切换的控件。',
        switch: '允许用户在选中和未选中状态之间切换的控件。',
        radioGroup: '一组可选择的按钮（称为单选按钮），其中一次最多只能选中一个按钮。',
        select: '显示一个供用户选择的选项列表——由按钮触发。',
        card: '显示一个包含标题、内容和页脚的卡片。',
        tabs: '一组分层的内容部分（称为标签面板），一次显示一个。',
        separator: '在视觉上或语义上分隔内容。',
        progress: '显示一个指示器，显示任务的完成进度。',
        slider: '用户从给定范围内选择值的输入。',
        avatar: '带有后备的图像元素，用于表示用户。',
        skeleton: '用于在内容加载时显示占位符。',
        accordion: '一组垂直堆叠的交互式标题，每个标题显示一部分内容。',
        dialog: '覆盖在主窗口或另一个对话框窗口上的窗口。',
        dropdownMenu: '向用户显示一个菜单——例如一组操作或功能——由按钮触发。',
        popover: '在门户中显示丰富内容，由按钮触发。',
        tooltip: '当元素获得键盘焦点或鼠标悬停在其上时，显示与元素相关的信息的弹出窗口。',
      },
    },
  },
  en: {
    // Common
    common: {
      loading: 'Loading...',
      back: 'Back',
      backToHome: 'Back to Home',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      search: 'Search',
      submit: 'Submit',
    },
    // Home
    home: {
      welcome: 'Welcome',
      welcomeBack: 'Welcome back, {name}',
      startBuilding: 'Start building your application',
      loggedInMessage: 'You are logged in and can enter the dashboard',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      enterDashboard: 'Enter Dashboard',
      signOut: 'Sign Out',
      signingOut: 'Signing out...',
      viewComponents: 'View Components',
    },
    // Components page
    components: {
      title: 'Components',
      description: 'Browse all available shadcn/ui components',
      all: 'All',
      categories: {
        all: 'All',
        forms: 'Forms',
        dataDisplay: 'Data Display',
        feedback: 'Feedback',
        layout: 'Layout',
        navigation: 'Navigation',
        overlay: 'Overlay',
      },
      footer: '{count} components • Built on',
      examples: {
        alert: {
          title: 'Heads up!',
          description: 'You can add components to your app using the cli.',
          errorTitle: 'Error',
          errorDescription: 'Your session has expired. Please log in again.',
        },
        label: {
          email: 'Email',
        },
        checkbox: {
          terms: 'Accept terms and conditions',
        },
        switch: {
          airplaneMode: 'Airplane Mode',
        },
        radioGroup: {
          default: 'Default',
          comfortable: 'Comfortable',
          compact: 'Compact',
        },
        select: {
          placeholder: 'Select a theme',
          light: 'Light',
          dark: 'Dark',
          system: 'System',
        },
        card: {
          title: 'Card Title',
          description: 'Card Description',
          content: 'Card Content',
        },
        tabs: {
          account: 'Account',
          password: 'Password',
          accountContent: 'Make changes to your account here.',
          passwordContent: 'Change your password here.',
        },
        separator: {
          blog: 'Blog',
          docs: 'Docs',
          source: 'Source',
          description: 'An open-source UI component library.',
        },
        textarea: {
          placeholder: 'Type your message here.',
        },
        accordion: {
          q1: 'Is it accessible?',
          a1: 'Yes. It adheres to the WAI-ARIA design pattern.',
          q2: 'Is it styled?',
          a2: 'Yes. It comes with default styles that matches the other components\' aesthetic.',
          q3: 'Is it animated?',
          a3: 'Yes. It\'s animated by default, but you can disable it if you prefer.',
        },
        dialog: {
          button: 'Open Dialog',
          title: 'Are you sure?',
          description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
        },
        dropdownMenu: {
          button: 'Open Menu',
          label: 'My Account',
          profile: 'Profile',
          settings: 'Settings',
          logout: 'Logout',
        },
        popover: {
          button: 'Open Popover',
          title: 'Dimensions',
          description: 'Set the dimensions for the layer.',
        },
        tooltip: {
          button: 'Hover me',
          content: 'Add to library',
        },
      },
      componentDescriptions: {
        button: 'Displays a button or a component that looks like a button.',
        badge: 'Displays a badge or a component that looks like a badge.',
        alert: 'Displays a callout for user attention.',
        input: 'Displays a form input field or a component that looks like an input.',
        textarea: 'Displays a form textarea or a component that looks like a textarea.',
        label: 'Renders an accessible label associated with controls.',
        checkbox: 'A control that allows the user to toggle between checked and unchecked states.',
        switch: 'A control that allows the user to toggle between checked and unchecked states.',
        radioGroup: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
        select: 'Displays a list of options for the user to pick from—triggered by a button.',
        card: 'Displays a card with header, content, and footer.',
        tabs: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        separator: 'Visually or semantically separates content.',
        progress: 'Displays an indicator showing the completion progress of a task.',
        slider: 'An input where the user selects a value from within a given range.',
        avatar: 'An image element with a fallback for representing the user.',
        skeleton: 'Use to show a placeholder while content is loading.',
        accordion: 'A vertically stacked set of interactive headings that each reveal a section of content.',
        dialog: 'A window overlaid on either the primary window or another dialog window.',
        dropdownMenu: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        popover: 'Displays rich content in a portal, triggered by a button.',
        tooltip: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;

export function getTranslation(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      value = undefined;
    }
  }

  if (typeof value !== 'string') {
    // Fallback to Chinese if translation not found
    value = translations.zh;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
      }
    }
    if (typeof value !== 'string') {
      return key;
    }
  }

  // Replace placeholders
  if (params) {
    return value.replace(/\{(\w+)\}/g, (_, paramKey) => {
      return String(params[paramKey] ?? `{${paramKey}}`);
    });
  }

  return value;
}

