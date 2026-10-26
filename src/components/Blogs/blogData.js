

// Local image imports removed to keep the bundle size small and optimize load speed.

export const blogPosts = {
  // ─────────────────────────────────────────────────────────────
  // BLOG 1: Riverpod vs BLoC
  // ─────────────────────────────────────────────────────────────
  blog1: {
    id: "blog1",
    title: "Mastering State Management: Why I Choose Riverpod over BLoC",
    titleKm: "ការស្ទាត់ជំនាញការគ្រប់គ្រង State: ហេតុអ្វីខ្ញុំជ្រើសរើស Riverpod ជាង BLoC",
    titleZh: "掌握状态管理：为什么我选择 Riverpod 而不是 BLoC",
    date: "June 2026",
    dateKm: "ខែមិថុនា ២០២៦",
    dateZh: "2026年6月",
    readTime: "5 min read",
    readTimeKm: "ការអាន ៥ នាទី",
    readTimeZh: "5 分钟阅读",
    tags: ["Flutter", "Architecture"],
    tagsKm: ["Flutter", "ស្ថាបត្យកម្ម"],
    tagsZh: ["Flutter", "架构"],
    // HTTPS Image URLs សម្រាប់ Architecture, Coding & State Management
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "An in-depth comparison of Riverpod and BLoC patterns in large-scale Flutter applications, focusing on reactivity, testability, and code structure.",
    descriptionKm: "ការប្រៀបធៀបពីទំនោរ Riverpod និង BLoC ក្នុងកម្មវិធី Flutter កម្រិតធំ ដែលផ្តល់អានុភាពលើសកម្មភាព ភាពងាយស្រួលក្នុងការធ្វើតេស្ត និងរចនាសម្ព័ន្ធកូដ។",
    descriptionZh: "对大型 Flutter 应用中的 Riverpod 和 BLoC 模式进行深入比较，重点关注响应性、可测试性和代码结构。",
    content: `
      <h2>Introduction</h2>
      <p>State management is one of the most debated topics in Flutter development. After shipping several large-scale apps using both BLoC and Riverpod, I've settled firmly on Riverpod — and in this article I'll explain exactly why.</p>

      <h2>The Problem with BLoC</h2>
      <p>BLoC is powerful, but it comes with significant overhead. Every feature requires at least three files: an event class, a state class, and the BLoC itself. For a simple form or a toggle, this boilerplate adds up fast and slows down development without adding real architectural value.</p>
      <pre><code>// BLoC requires separate Event and State classes
abstract class LoginEvent {}
class LoginSubmitted extends LoginEvent {
  final String email, password;
  LoginSubmitted(this.email, this.password);
}

abstract class LoginState {}
class LoginInitial extends LoginState {}
class LoginLoading extends LoginState {}
class LoginSuccess extends LoginState {}
class LoginFailure extends LoginState {
  final String message;
  LoginFailure(this.message);
}</code></pre>

      <h2>Why Riverpod Wins</h2>
      <p>Riverpod removes the boilerplate while keeping full reactive power. Providers are compile-safe, globally accessible without a context, and auto-disposed when no longer needed. You write less code and get more — dependency injection, caching, and reactivity all in one.</p>
      <pre><code>// Riverpod — same login logic, far less code
@riverpod
class LoginNotifier extends _$LoginNotifier {
  @override
  AsyncValue&lt;void&gt; build() => const AsyncData(null);

  Future&lt;void&gt; submit(String email, String password) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => ref.read(authRepositoryProvider).login(email, password),
    );
  }
}</code></pre>

      <h2>Testability</h2>
      <p>Both solutions are testable, but Riverpod's <code>ProviderContainer</code> makes overriding dependencies in tests trivial — no need for a full widget tree or mock streams.</p>
      <pre><code>test('login success', () async {
  final container = ProviderContainer(overrides: [
    authRepositoryProvider.overrideWithValue(FakeAuthRepository()),
  ]);
  await container.read(loginNotifierProvider.notifier).submit('a@b.com', '123');
  expect(container.read(loginNotifierProvider), isA&lt;AsyncData&gt;());
});</code></pre>

      <h2>Conclusion</h2>
      <p>Riverpod gives you everything BLoC offers — reactivity, separation of concerns, testability — with far less ceremony. If you're starting a new Flutter project today, Riverpod is the cleaner, faster, and more maintainable choice.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>ការគ្រប់គ្រង state គឺជាប្រធានបទដែលជជែកគ្នាច្រើនបំផុតក្នុងការអភិវឌ្ឍន៍ Flutter។ បន្ទាប់ពីបានបញ្ចេញកម្មវិធីធំៗជាច្រើនដោយប្រើទាំង BLoC និង Riverpod ខ្ញុំបានជ្រើសរើស Riverpod យ៉ាងច្បាស់ — ហើយក្នុងអត្ថបទនេះ ខ្ញុំនឹងពន្យល់ហេតុផលច្បាស់លាស់។</p>

      <h2>បញ្ហារបស់ BLoC</h2>
      <p>BLoC មានអានុភាពខ្លាំង ប៉ុន្តែមាន overhead ច្រើន។ មុខងារនីមួយៗត្រូវការយ៉ាងតិចបីឯកសារ: class event, class state, និង BLoC ខ្លួនឯង។ សម្រាប់ form សាមញ្ញ ឬ toggle មួយ boilerplate នេះកើនឡើងលឿន ហើយធ្វើឱ្យការអភិវឌ្ឍន៍យឺតចុះ ដោយមិនបានបន្ថែមតម្លៃស្ថាបត្យកម្មពិតប្រាកដ។</p>
      <pre><code>// BLoC ត្រូវការ class Event និង State ដាច់ដោយឡែក
abstract class LoginEvent {}
class LoginSubmitted extends LoginEvent {
  final String email, password;
  LoginSubmitted(this.email, this.password);
}

abstract class LoginState {}
class LoginInitial extends LoginState {}
class LoginLoading extends LoginState {}
class LoginSuccess extends LoginState {}
class LoginFailure extends LoginState {
  final String message;
  LoginFailure(this.message);
}</code></pre>

      <h2>ហេតុអ្វី Riverpod ឈ្នះ</h2>
      <p>Riverpod លុប boilerplate ចេញ ខណៈពេលរក្សាអានុភាព reactive ពេញលេញ។ Providers មានសុវត្ថិភាព compile-safe អាចចូលប្រើប្រាស់ជាសកល ហើយ auto-disposed នៅពេលលែងចាំបាច់។ អ្នកសរសេរកូដតិចជាង ប៉ុន្តែទទួលបានច្រើនជាង — dependency injection, caching, និង reactivity ក្នុងមួយ។</p>
      <pre><code>// Riverpod — logic login ដូចគ្នា កូដតិចជាងច្រើន
@riverpod
class LoginNotifier extends _$LoginNotifier {
  @override
  AsyncValue&lt;void&gt; build() => const AsyncData(null);

  Future&lt;void&gt; submit(String email, String password) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => ref.read(authRepositoryProvider).login(email, password),
    );
  }
}</code></pre>

      <h2>ភាពងាយស្រួលក្នុងការធ្វើតេស្ត</h2>
      <p>ដំណោះស្រាយទាំងពីរអាចធ្វើតេស្តបាន ប៉ុន្តែ <code>ProviderContainer</code> របស់ Riverpod ធ្វើឱ្យការ override dependencies ក្នុងការធ្វើតេស្តមានភាពងាយស្រួលបំផុត — មិនចាំបាច់ widget tree ពេញ ឬ mock streams ទេ។</p>
      <pre><code>test('login success', () async {
  final container = ProviderContainer(overrides: [
    authRepositoryProvider.overrideWithValue(FakeAuthRepository()),
  ]);
  await container.read(loginNotifierProvider.notifier).submit('a@b.com', '123');
  expect(container.read(loginNotifierProvider), isA&lt;AsyncData&gt;());
});</code></pre>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>Riverpod ផ្តល់ឱ្យអ្នកនូវអ្វីៗទាំងអស់ដែល BLoC មាន — reactivity, ការញែករវាង concerns, ភាពងាយស្រួលក្នុងការធ្វើតេស្ត — ដោយមានការខ្ជះខ្ជាយពេលវេលាតិចជាង។ ប្រសិនបើអ្នកចាប់ផ្តើមគម្រោង Flutter ថ្មីនៅថ្ងៃនេះ Riverpod គឺជាជម្រើសដែលស្អាតជាង លឿនជាង និងងាយថែទាំជាង។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>状态管理是 Flutter 开发中最具争议的话题之一。在发布了几款使用 BLoC 和 Riverpod 构建的大型应用后，我坚定地选择了 Riverpod —— 在这篇文章中，我将详细解释原因。</p>

      <h2>BLoC 的问题</h2>
      <p>BLoC 功能强大，但带来了显著的开销。每个功能至少需要三个文件：一个事件类、一个状态类和 BLoC 本身。对于一个简单的表单或开关，这些样板代码会迅速累积，拖慢开发速度而不增加真正的架构价值。</p>
      <pre><code>// BLoC 需要单独的事件和状态类
abstract class LoginEvent {}
class LoginSubmitted extends LoginEvent {
  final String email, password;
  LoginSubmitted(this.email, this.password);
}

abstract class LoginState {}
class LoginInitial extends LoginState {}
class LoginLoading extends LoginState {}
class LoginSuccess extends LoginState {}
class LoginFailure extends LoginState {
  final String message;
  LoginFailure(this.message);
}</code></pre>

      <h2>为什么 Riverpod 胜出</h2>
      <p>Riverpod 在保持完整响应能力的同时消除了样板代码。提供者是编译安全的，无需上下文即可全局访问，并且在不再需要时自动销毁。您编写的代码更少，但获得的更多 —— 依赖注入、缓存和响应式功能全部集成在一个地方。</p>
      <pre><code>// Riverpod — 相同的登录逻辑，代码少得多
@riverpod
class LoginNotifier extends _$LoginNotifier {
  @override
  AsyncValue&lt;void&gt; build() => const AsyncData(null);

  Future&lt;void&gt; submit(String email, String password) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => ref.read(authRepositoryProvider).login(email, password),
    );
  }
}</code></pre>

      <h2>可测试性</h2>
      <p>两种方案都是可测试的，但 Riverpod 的 <code>ProviderContainer</code> 使得在测试中覆盖依赖变得非常简单 —— 不需要完整的组件树或模拟流。</p>
      <pre><code>test('login success', () async {
  final container = ProviderContainer(overrides: [
    authRepositoryProvider.overrideWithValue(FakeAuthRepository()),
  ]);
  await container.read(loginNotifierProvider.notifier).submit('a@b.com', '123');
  expect(container.read(loginNotifierProvider), isA&lt;AsyncData&gt;());
});</code></pre>

      <h2>结论</h2>
      <p>Riverpod 为您提供了 BLoC 所拥有的一切 —— 响应性、关注点分离、可测试性 —— 但 ceremonial 要少得多。如果您今天开始一个新的 Flutter 项目，Riverpod 是更干净、更快、更可维护的选择。</p>
    `,
  },

  // ─────────────────────────────────────────────────────────────
  // BLOG 2: Glassmorphic Custom UI
  // ─────────────────────────────────────────────────────────────
  blog2: {
    id: "blog2",
    title: "Building Premium Glassmorphic Custom UI in Flutter",
    titleKm: "ការបង្កើត UI Glassmorphic ប្រកបដោយភាពពិសេសក្នុង Flutter",
    titleZh: "在 Flutter 中构建高级玻璃态自定义 UI",
    date: "May 2026",
    dateKm: "ខែឧសភា ២០២៦",
    dateZh: "2026年5月",
    readTime: "4 min read",
    readTimeKm: "ការអាន ៤ នាទី",
    readTimeZh: "4 分钟阅读",
    tags: ["UI/UX", "Design"],
    tagsKm: ["UI/UX", "រចនា"],
    tagsZh: ["UI/UX", "设计"],
    // HTTPS Image URLs សម្រាប់ Glassmorphic, Modern UI/UX Dashboards
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "How to implement complex, high-end visual designs like premium dashboards using BackdropFilter and CustomPainter without external packages.",
    descriptionKm: "របៀបអនុវត្តការរចនា complex និង premium ដូចជា dashboard ប្រកបដោយភាពថ្លៃក្នុង Flutter ដោយប្រើ BackdropFilter និង CustomPainter ប៉ុន្តែមិនប្រើផ្កាយផ្សេង។",
    descriptionZh: "如何使用 BackdropFilter 和 CustomPainter 实现复杂的高端视觉设计，如高级仪表板，而无需外部包。",
    content: `
      <h2>Introduction</h2>
      <p>Glassmorphism — the frosted-glass aesthetic made popular by iOS and macOS — has become one of the most sought-after UI trends in mobile design. In this article I'll show you how to build a reusable, production-ready glassmorphic card widget in Flutter from scratch.</p>

      <h2>Core Technique: BackdropFilter</h2>
      <p>The key to glassmorphism is Flutter's <code>BackdropFilter</code> widget combined with <code>ImageFilter.blur</code>. Wrap it in a <code>ClipRRect</code> to confine the blur to the card boundaries, then overlay a semi-transparent white container on top.</p>
      <pre><code>class GlassCard extends StatelessWidget {
  final Widget child;
  const GlassCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 15, sigmaY: 15),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.15),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(
              color: Colors.white.withOpacity(0.3),
              width: 1.5,
            ),
          ),
          child: child,
        ),
      ),
    );
  }
}</code></pre>

      <h2>Creating the Background</h2>
      <p>Glassmorphism only looks good against a rich, colourful background. Use a gradient or a blurred image as the scene behind your card — the frosted effect has nothing to work with on a flat background.</p>
      <pre><code>Container(
  decoration: const BoxDecoration(
    gradient: LinearGradient(
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
      colors: [Color(0xFF7C3AED), Color(0xFF2563EB), Color(0xFF06B6D4)],
    ),
  ),
  child: const GlassCard(child: YourContent()),
)</code></pre>

      <h2>Performance Considerations</h2>
      <p>BackdropFilter is GPU-intensive. Follow these rules to keep performance smooth:</p>
      <ul>
        <li>Wrap the blurred region in a <code>RepaintBoundary</code> so Flutter only repaints that layer when needed.</li>
        <li>Avoid stacking multiple <code>BackdropFilter</code> widgets — each one triggers a full compositing pass.</li>
        <li>Test on a real low-end device, not just the simulator. Blur at sigmaX/Y above 20 can drop frames noticeably on older hardware.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With just <code>BackdropFilter</code>, a semi-transparent container, and a vibrant background, you can build stunning glass UI components that feel native to both iOS and Android. Keep blur values moderate and isolate your paint layers, and performance will stay solid.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>Glassmorphism — សោភ័ណភាពកញ្ចក់ frost ដែលមានប្រជាប្រិយភាពដោយ iOS និង macOS — បានក្លាយជាទំនោររចនា UI ដ៏ពេញនិយមមួយក្នុងចំណោមទំនោររចនាកម្មវិធីទូរស័ព្ទ។ ក្នុងអត្ថបទនេះ ខ្ញុំនឹងបង្ហាញអ្នករបៀបបង្កើត widget card glassmorphic ដែលអាចប្រើឡើងវិញ និងត្រៀមសម្រាប់ production ក្នុង Flutter ពីដំបូង។</p>

      <h2>បច្ចេកទេសសំខាន់: BackdropFilter</h2>
      <p>គន្លឹះនៃ glassmorphism គឺ widget <code>BackdropFilter</code> របស់ Flutter រួមផ្សំជាមួយ <code>ImageFilter.blur</code>។ រុំវានៅក្នុង <code>ClipRRect</code> ដើម្បីកំណត់ blur ទៅលើព្រំដែន card បន្ទាប់មកដាក់ container ពណ៌ស semi-transparent នៅលើខាងលើ។</p>
      <pre><code>class GlassCard extends StatelessWidget {
  final Widget child;
  const GlassCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 15, sigmaY: 15),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.15),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(
              color: Colors.white.withOpacity(0.3),
              width: 1.5,
            ),
          ),
          child: child,
        ),
      ),
    );
  }
}</code></pre>

      <h2>ការបង្កើតផ្ទៃខាងក្រោយ</h2>
      <p>Glassmorphism មើលទៅល្អតែប្រឆាំងនឹងផ្ទៃខាងក្រោយដែលមានពណ៌ស្រស់ស្អាត។ ប្រើ gradient ឬរូបភាពដែលបាន blur ជាឈុតខាងក្រោយ card របស់អ្នក — បែបបទ frosted មិនមានអ្វីដើម្បីធ្វើការជាមួយផ្ទៃខាងក្រោយ flat ទេ។</p>

      <h2>ការពិចារណាលើដំណើរការ</h2>
      <p>BackdropFilter ប្រើ GPU យ៉ាងខ្លាំង។ អនុវត្តតាមច្បាប់ទាំងនេះ ដើម្បីរក្សាដំណើរការបានរលូន:</p>
      <ul>
        <li>រុំតំបន់ blur ក្នុង <code>RepaintBoundary</code> ដើម្បីឱ្យ Flutter repaint តែស្រទាប់នោះតែប៉ុណ្ណោះ នៅពេលចាំបាច់។</li>
        <li>កុំដាក់ widget <code>BackdropFilter</code> ច្រើននៅជាន់គ្នា — ម្នាក់ៗបង្ក compositing pass ពេញ។</li>
        <li>ធ្វើតេស្តនៅលើឧបករណ៍ low-end ពិតប្រាកដ មិនមែន simulator ទេ។</li>
      </ul>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>ដោយប្រើ <code>BackdropFilter</code>, container semi-transparent, និងផ្ទៃខាងក្រោយដ៏រស់រវើក អ្នកអាចបង្កើតសមាសភាគ UI glass ដ៏ស្រស់ស្អាតដែលមានអារម្មណ៍ native ទាំង iOS និង Android។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>玻璃态（Glassmorphism）—— 由 iOS 和 macOS 推广的磨砂玻璃美学 —— 已成为移动设计中最受欢迎的 UI 趋势之一。在本文中，我将向您展示如何从头开始构建一个可复用、可用于生产的玻璃态卡片组件。</p>

      <h2>核心技术：BackdropFilter</h2>
      <p>玻璃态的关键是 Flutter 的 <code>BackdropFilter</code> 组件与 <code>ImageFilter.blur</code> 结合使用。将其包装在 <code>ClipRRect</code> 中以将模糊限制在卡片边界内，然后在顶部叠加一个半透明白色容器。</p>

      <h2>性能考虑</h2>
      <p>BackdropFilter 对 GPU 消耗较大。遵循以下规则以保持性能流畅：</p>
      <ul>
        <li>将模糊区域包装在 <code>RepaintBoundary</code> 中，以便 Flutter 仅在需要时重新绘制该层。</li>
        <li>避免堆叠多个 <code>BackdropFilter</code> 组件 —— 每个都会触发完整的合成通道。</li>
      </ul>

      <h2>结论</h2>
      <p>只需 <code>BackdropFilter</code>、半透明容器和 vibrant 背景，您就可以构建令人惊叹的玻璃 UI 组件，在 iOS 和 Android 上都感觉原生。</p>
    `,
  },

  // ─────────────────────────────────────────────────────────────
  // BLOG 3: App Size Optimization
  // ─────────────────────────────────────────────────────────────
  blog3: {
    id: "blog3",
    title: "How I Optimized Mobile App Size by 40%",
    titleKm: "របៀបដែលខ្ញុំបានកាត់បន្ថយទំហំកម្មវិធីទូរស័ព្ទបានដល់ 40%",
    titleZh: "我如何将移动应用体积优化 40%",
    date: "April 2026",
    dateKm: "ខែមេសា ២០២៦",
    dateZh: "2026年4月",
    readTime: "6 min read",
    readTimeKm: "ការអាន ៦ នាទី",
    readTimeZh: "6 分钟阅读",
    tags: ["Optimization", "Android"],
    tagsKm: ["ការបង្កើនប្រសិទ្ធភាព", "Android"],
    tagsZh: ["优化", "Android"],
    // HTTPS Image URLs សម្រាប់ Code Optimization & Mobile Performance
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "A practical guide to resource shrinking, ProGuard rules, image optimization, and dynamic delivery to achieve lightweight installation files.",
    descriptionKm: "វគ្គស្វ័យប្រវត្តិ practical ស្ដីអំពីការបង្កើនប្រសិទ្ធភាព resources shrinking, ProGuard rules, ការបង្កើនប្រសិទ្ធភាពរូបភាព និងការដឹកជញ្ជូនដដ្ឋានដើម្បីទទួលបានភាពអប្បបរមទំហំកម្មវិធី។",
    descriptionZh: "关于资源缩减、ProGuard 规则、图像优化和动态分发的实用指南，以实现轻量级安装文件。",
    content: `
      <h2>Introduction</h2>
      <p>Every megabyte counts. Studies show that for every 6 MB increase in APK size, install conversion drops by roughly 1%. After auditing one of my production Flutter apps, I cut its APK from 28 MB down to 17 MB — a 40% reduction — using four targeted techniques.</p>

      <h2>1. Enable Resource & Code Shrinking</h2>
      <p>The first and easiest win is enabling shrinking in your <code>build.gradle</code>. This tells R8 to remove unused code and resources automatically.</p>
      <pre><code>// android/app/build.gradle
buildTypes {
  release {
    minifyEnabled true      // removes unused code via R8
    shrinkResources true    // removes unused resources
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'),
                 'proguard-rules.pro'
  }
}</code></pre>

      <h2>2. Convert Images to WebP</h2>
      <p>PNG and JPEG assets are the biggest culprits in most APKs. Converting to WebP typically saves 25–35% per image with no visible quality loss.</p>

      <h2>3. Use App Bundles Instead of APKs</h2>
      <p>Publish an Android App Bundle (<code>.aab</code>) instead of a universal APK. Google Play then delivers only the resources and code that each specific device needs.</p>
      <pre><code># Build a release App Bundle
flutter build appbundle --release</code></pre>

      <h2>4. Audit Your Dependencies</h2>
      <p>Run <code>flutter pub deps</code> and look for packages that pull in large native libraries. Replace heavy packages with lighter alternatives where possible.</p>

      <h2>Conclusion</h2>
      <p>These four steps — shrinking, WebP conversion, App Bundles, and dependency audits — brought my app from 28 MB to 17 MB without removing a single feature.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>រាល់ megabyte មានសារៈសំខាន់។ ការស្រាវជ្រាវបង្ហាញថា រាល់ការបង្កើន APK 6 MB ការបំប្លែងការដំឡើងធ្លាក់ចុះប្រហែល 1%។ បន្ទាប់ពីពិនិត្យ audit កម្មវិធី Flutter production មួយរបស់ខ្ញុំ ខ្ញុំបានកាត់ APK របស់វាពី 28 MB ចុះដល់ 17 MB — ការកាត់បន្ថយ 40% — ដោយប្រើបច្ចេកទេសសំខាន់ ៤។</p>

      <h2>១. បើកដំណើរការ Resource & Code Shrinking</h2>
      <p>ជំហានដំបូង និងងាយស្រួលបំផុតគឺបើកដំណើរការ shrinking នៅក្នុង <code>build.gradle</code> របស់អ្នក។ វាប្រាប់ R8 ឱ្យលុបកូដ និងធនធានដែលមិនបានប្រើប្រាស់ដោយស្វ័យប្រវត្តិ។</p>

      <h2>២. បំប្លែងរូបភាពទៅ WebP</h2>
      <p>Assets PNG និង JPEG ជាហេតុផលធំបំផុតក្នុង APK ភាគច្រើន។ ការបំប្លែងទៅ WebP ជាធម្មតាសន្សំ 25–35% ក្នុងមួយរូបភាព ដោយគ្មានការបាត់បង់គុណភាព។</p>

      <h2>៣. ប្រើ App Bundles ជំនួស APKs</h2>
      <p>បោះផ្សាយ Android App Bundle (<code>.aab</code>) ជំនួស APK universal។</p>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>ជំហានបួននេះ — shrinking, ការបំប្លែង WebP, App Bundles, និងការ audit dependencies — បានកាត់កម្មវិធីរបស់ខ្ញុំពី 28 MB ចុះដល់ 17 MB ដោយមិនបានលុបមុខងារណាមួយ។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>每一个字节都很重要。研究表明，APK 大小每增加 6 MB，安装转化率就会下降约 1%。在审计了我的一款生产 Flutter 应用后，我使用四种有针对性的技术将其 APK 从 28 MB 减少到 17 MB —— 减少了 40%。</p>

      <h2>1. 启用资源与代码缩减</h2>
      <p>第一也是最容易的胜利是在您的 <code>build.gradle</code> 中启用缩减。这告诉 R8 自动删除未使用的代码和资源。</p>

      <h2>2. 将图像转换为 WebP</h2>
      <p>PNG 和 JPEG 资源是大多数 APK 中最大的问题。转换为 WebP 通常每张图像可节省 25-35%，且没有明显的质量损失。</p>

      <h2>结论</h2>
      <p>这四个步骤 —— 缩减、WebP 转换、App Bundles 和依赖审计 —— 将我的应用从 28 MB 减少到 17 MB，而无需删除任何功能。</p>
    `,
  },

  // ─────────────────────────────────────────────────────────────
  // BLOG 4: BLoC & Cubit Best Practices
  // ─────────────────────────────────────────────────────────────
  blog4: {
    id: "blog4",
    title: "Implementing BLoC & Cubit Pattern in Flutter: Best Practices",
    titleKm: "ការអនុវត្តបទរូបភាព BLoC និង Cubit ក្នុង Flutter: វិធីអនុវត្តល្អបំផុត",
    titleZh: "在 Flutter 中实现 BLoC 和 Cubit 模式：最佳实践",
    date: "July 2026",
    dateKm: "ខែកក្កដា ២០២៦",
    dateZh: "2026年7月",
    readTime: "7 min read",
    readTimeKm: "ការអាន ៧ នាទី",
    readTimeZh: "7 分钟阅读",
    tags: ["Flutter", "BLoC", "Architecture"],
    tagsKm: ["Flutter", "BLoC", "ស្ថាបត្យកម្ម"],
    tagsZh: ["Flutter", "BLoC", "架构"],
    // HTTPS Image URLs សម្រាប់ BLoC / Cubit Architecture
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Best practices for implementing BLoC pattern in Flutter for scalable and testable applications.",
    descriptionKm: "វិធីអនុវត្តល្អបំផុតសម្រាប់ការអនុវត្តបទរូបភាព BLoC ក្នុង Flutter សម្រាប់កម្មវិធីដែលអាចពង្រីកបាន និងងាយធ្វើតេស្ត។",
    descriptionZh: "在 Flutter 中实现 BLoC 模式的最佳实践，用于构建可扩展和可测试的应用。",
    content: `
      <h2>Introduction</h2>
      <p>The BLoC (Business Logic Component) pattern is one of Flutter's most powerful architectural tools. After using it across multiple production apps, I've collected a set of best practices that keep BLoC code clean, testable, and maintainable — especially as the app grows.</p>

      <h2>BLoC vs Cubit — Pick the Right Tool</h2>
      <p>Cubit is a simplified version of BLoC that replaces events with direct method calls. Use Cubit for simple, localized logic. Reach for BLoC when you need event history, transformations, or debouncing.</p>
      <pre><code>// Cubit — direct method call
class ThemeCubit extends Cubit&lt;ThemeMode&gt; {
  ThemeCubit() : super(ThemeMode.light);
  void toggle() => emit(state == ThemeMode.light ? ThemeMode.dark : ThemeMode.light);
}

// BLoC — event-driven, supports transformers
class SearchBloc extends Bloc&lt;SearchEvent, SearchState&gt; {
  SearchBloc(this._repo) : super(SearchInitial()) {
    on&lt;SearchQueryChanged&gt;(_onQueryChanged,
      transformer: debounce(const Duration(milliseconds: 300)));
  }

  Future&lt;void&gt; _onQueryChanged(SearchQueryChanged e, Emitter emit) async {
    emit(SearchLoading());
    final results = await _repo.search(e.query);
    emit(SearchLoaded(results));
  }
}</code></pre>

      <h2>Provide BLoC at the Right Level</h2>
      <p>Always place <code>BlocProvider</code> at the highest widget that needs the BLoC — not higher, not lower. Providing too high wastes memory; providing too low causes missing-context errors.</p>
      <pre><code>// ✅ Scoped correctly to the route that needs it
GoRoute(
  path: '/search',
  builder: (context, state) => BlocProvider(
    create: (ctx) => SearchBloc(ctx.read&lt;SearchRepository&gt;()),
    child: const SearchPage(),
  ),
)</code></pre>

      <h2>Design Sealed, Immutable States</h2>
      <p>Never model state with multiple booleans — it creates invalid combinations. Use <code>sealed</code> classes (Dart 3+) or the <code>freezed</code> package for exhaustive, compiler-checked states.</p>

      <h2>Conclusion</h2>
      <p>BLoC shines when you respect its structure: pick Cubit for simple cases, scope providers correctly, model states as sealed classes, and test every path.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>បទរូបភាព BLoC (Business Logic Component) គឺជាឧបករណ៍ស្ថាបត្យកម្មដ៏មានអានុភាពបំផុតមួយរបស់ Flutter។ បន្ទាប់ពីប្រើប្រាស់វាក្នុងកម្មវិធី production ជាច្រើន ខ្ញុំបានប្រមូលវិធីអនុវត្តល្អបំផុតដែលរក្សាកូដ BLoC ឱ្យស្អាត ងាយធ្វើតេស្ត និងអាចថែទាំបាន។</p>

      <h2>BLoC ធៀបនឹង Cubit — ជ្រើសឧបករណ៍ត្រឹមត្រូវ</h2>
      <p>Cubit គឺជាកំណែសាមញ្ញនៃ BLoC ដែលជំនួស events ដោយការហៅ method ដោយផ្ទាល់។</p>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>BLoC នៅពេលអ្នកគោរពរចនាសម្ព័ន្ធរបស់វា: ជ្រើស Cubit សម្រាប់ករណីសាមញ្ញ scope providers ឱ្យបានត្រឹមត្រូវ កំណត់ states ជា sealed classes និងធ្វើតេស្តគ្រប់ path។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>BLoC（业务逻辑组件）模式是 Flutter 最强大的架构工具之一。在多个生产应用中使用了它之后，我收集了一套最佳实践，使 BLoC 代码保持干净、可测试和可维护。</p>
    `,
  },
};

export default blogPosts;
