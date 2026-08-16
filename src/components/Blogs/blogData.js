import blogImage from "../../Assets/Projects/blog.png";
import bloc from "../../Assets/bloc.png";
import bloc2 from "../../Assets/bloc2.png";
import bloc3 from "../../Assets/bloc3.png";
import bloc4 from "../../Assets/bloc4.png";
import ui from "../../Assets/ui.png";
import ui3 from "../../Assets/ui2.png";
import ui2 from "../../Assets/ui3.png";
import ui4 from "../../Assets/ui4.png";
import app from "../../Assets/app.png";
import app2 from "../../Assets/app2.png";
import bloc_cubit from "../../Assets/bloc_cubit.png";
import bloc_cubit2 from "../../Assets/bloc_cubit2.png";


export const blogPosts = {

  // ─────────────────────────────────────────────────────────────
  // BLOG 1
  // ─────────────────────────────────────────────────────────────
  blog1: {
    id: "blog1",
    title: "Mastering State Management: Why I Choose Riverpod over BLoC",
    titleKm: "ការស្ទាត់ជំនាញការគ្រប់គ្រង State: ហេតុអ្វីខ្ញុំជ្រើសរើស Riverpod ជាង BLoC",
    titleZh: "掌握状态管理：为什么我选择 Riverpod 而不是 BLoC",
    date: "June 2026",
    dateKm: "ខែមិគ្រី ២០២៦",
    dateZh: "2026年6月",
    readTime: "5 min read",
    readTimeKm: "ការអាន ៥ នាទី",
    readTimeZh: "5 分钟阅读",
    tags: ["Flutter", "Architecture"],
    tagsKm: ["Flutter", "ស្ថាបត្យកម្ម"],
    tagsZh: ["Flutter", "架构"],
    images: [bloc, bloc2, bloc3, bloc4],
    description: "An in-depth comparison of Riverpod and BLoC patterns in large-scale Flutter applications, focusing on reactivity, testability, and code structure.",
    descriptionKm: "ការប្រៀបប្ដីពីទំនោរ Riverpod និង BLoC ក្នុងកម្មវិធី Flutter កម្រិតធំ ដែលផ្តល់អានុភាពលើសកម្មភាព ភាពងាយស្រួលក្នុងការធ្វើតេស្ត និងរចនាសម្ព័ន្ធកូដ។",
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
      () =&gt; ref.read(authRepositoryProvider).login(email, password),
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
  // BLOG 2
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
    images: [ui, ui2, ui3, ui4],
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

      <h2>ការពិចារណាលើដំណើរការ</h2>
      <p>BackdropFilter ប្រើ GPU យ៉ាងខ្លាំង។ អនុវត្តតាមច្បាប់ទាំងនេះ ដើម្បីរក្សាដំណើរការបានរលូន:</p>
      <ul>
        <li>រុំតំបន់ blur ក្នុង <code>RepaintBoundary</code> ដើម្បីឱ្យ Flutter repaint តែស្រទាប់នោះតែប៉ុណ្ណោះ នៅពេលចាំបាច់។</li>
        <li>កុំដាក់ widget <code>BackdropFilter</code> ច្រើននៅជាន់គ្នា — ម្នាក់ៗបង្ក compositing pass ពេញ។</li>
        <li>ធ្វើតេស្តនៅលើឧបករណ៍ low-end ពិតប្រាកដ មិនមែន simulator ទេ។ Blur ខ្ពស់ពេក អាចធ្វើឱ្យ frames ធ្លាក់ចុះនៅ hardware ចាស់។</li>
      </ul>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>ដោយប្រើ <code>BackdropFilter</code>, container semi-transparent, និងផ្ទៃខាងក្រោយដ៏រស់រវើក អ្នកអាចបង្កើតសមាសភាគ UI glass ដ៏ស្រស់ស្អាតដែលមានអារម្មណ៍ native ទាំង iOS និង Android។ រក្សាតម្លៃ blur ឱ្យមាន moderation ហើយញែក paint layers របស់អ្នក ហើយដំណើរការនឹងស្ថិតស្ថេរ។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>玻璃态（Glassmorphism）—— 由 iOS 和 macOS 推广的磨砂玻璃美学 —— 已成为移动设计中最受欢迎的 UI 趋势之一。在本文中，我将向您展示如何从头开始构建一个可复用、可用于生产的玻璃态卡片组件。</p>

      <h2>核心技术：BackdropFilter</h2>
      <p>玻璃态的关键是 Flutter 的 <code>BackdropFilter</code> 组件与 <code>ImageFilter.blur</code> 结合使用。将其包装在 <code>ClipRRect</code> 中以将模糊限制在卡片边界内，然后在顶部叠加一个半透明白色容器。</p>
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

      <h2>创建背景</h2>
      <p>玻璃态只有在丰富、多彩的背景前才好看。使用渐变或模糊图像作为卡片背后的场景 —— 在扁平背景上，磨砂效果将无从发挥作用。</p>
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

      <h2>性能考虑</h2>
      <p>BackdropFilter 对 GPU 消耗较大。遵循以下规则以保持性能流畅：</p>
      <ul>
        <li>将模糊区域包装在 <code>RepaintBoundary</code> 中，以便 Flutter 仅在需要时重新绘制该层。</li>
        <li>避免堆叠多个 <code>BackdropFilter</code> 组件 —— 每个都会触发完整的合成通道。</li>
        <li>在真实的低端设备上测试，而不仅仅是模拟器。sigmaX/Y 高于 20 的模糊在较旧的硬件上会明显掉帧。</li>
      </ul>

      <h2>结论</h2>
      <p>只需 <code>BackdropFilter</code>、半透明容器和 vibrant 背景，您就可以构建令人惊叹的玻璃 UI 组件，在 iOS 和 Android 上都感觉原生。保持适中的模糊值并隔离您的绘制层，性能将保持稳定。</p>
    `,
  },
  // ─────────────────────────────────────────────────
  // BLOG 3
  // ─────────────────────────────────────────────────
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
    images: [app, app2],
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
      <p>PNG and JPEG assets are the biggest culprits in most APKs. Converting to WebP typically saves 25–35% per image with no visible quality loss. In Android Studio: right-click any drawable folder → <em>Convert to WebP</em>. For Flutter assets, use <code>cwebp</code> from the command line.</p>
      <pre><code># Convert an entire assets folder to WebP (lossless)
for f in assets/images/*.png; do
  cwebp -lossless "$f" -o "${bloc}.webp"
done</code></pre>

      <h2>3. Use App Bundles Instead of APKs</h2>
      <p>Publish an Android App Bundle (<code>.aab</code>) instead of a universal APK. Google Play then delivers only the resources and code that each specific device needs — the right screen density, ABI, and language — cutting the download size by up to 40% compared to a fat APK.</p>
      <pre><code># Build a release App Bundle
flutter build appbundle --release</code></pre>

      <h2>4. Audit Your Dependencies</h2>
      <p>Run <code>flutter pub deps</code> and look for packages that pull in large native libraries. Replace heavy packages with lighter alternatives where possible. For example, swap <code>firebase_analytics</code> for a custom lightweight analytics client if you only need basic event tracking.</p>

      <h2>Conclusion</h2>
      <p>These four steps — shrinking, WebP conversion, App Bundles, and dependency audits — brought my app from 28 MB to 17 MB without removing a single feature. Start with shrinking and WebP; they're the lowest effort for the highest gain.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>រាល់ megabyte មានសារៈសំខាន់។ ការស្រាវជ្រាវបង្ហាញថា រាល់ការបង្កើន APK 6 MB ការបំប្លែងការដំឡើងធ្លាក់ចុះប្រហែល 1%។ បន្ទាប់ពីពិនិត្យ audit កម្មវិធី Flutter production មួយរបស់ខ្ញុំ ខ្ញុំបានកាត់ APK របស់វាពី 28 MB ចុះដល់ 17 MB — ការកាត់បន្ថយ 40% — ដោយប្រើបច្ចេកទេសសំខាន់ ៤។</p>

      <h2>១. បើកដំណើរការ Resource & Code Shrinking</h2>
      <p>ជំហានដំបូង និងងាយស្រួលបំផុតគឺបើកដំណើរការ shrinking នៅក្នុង <code>build.gradle</code> របស់អ្នក។ វាប្រាប់ R8 ឱ្យលុបកូដ និងធនធានដែលមិនបានប្រើប្រាស់ដោយស្វ័យប្រវត្តិ។</p>
      <pre><code>// android/app/build.gradle
buildTypes {
  release {
    minifyEnabled true      // លុបកូដដែលមិនប្រើតាម R8
    shrinkResources true    // លុបធនធានដែលមិនប្រើ
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'),
                 'proguard-rules.pro'
  }
}</code></pre>

      <h2>២. បំប្លែងរូបភាពទៅ WebP</h2>
      <p>Assets PNG និង JPEG ជាហេតុផលធំបំផុតក្នុង APK ភាគច្រើន។ ការបំប្លែងទៅ WebP ជាធម្មតាសន្សំ 25–35% ក្នុងមួយរូបភាព ដោយគ្មានការបាត់បង់គុណភាព។ ក្នុង Android Studio: ចុចខាងស្តាំ folder drawable ណាមួយ → <em>Convert to WebP</em>។ សម្រាប់ assets Flutter ប្រើ <code>cwebp</code> ពី command line។</p>
      <pre><code># បំប្លែង folder assets ទាំងមូលទៅ WebP (lossless)
for f in assets/images/*.png; do
  cwebp -lossless "$f" -o "${blogImage}.webp"
done</code></pre>

      <h2>៣. ប្រើ App Bundles ជំនួស APKs</h2>
      <p>បោះផ្សាយ Android App Bundle (<code>.aab</code>) ជំនួស APK universal។ Google Play នឹងបញ្ជូនតែធនធាន និងកូដដែលឧបករណ៍ជាក់លាក់នីមួយៗត្រូវការ — screen density ត្រឹមត្រូវ, ABI, និងភាសា — កាត់ទំហំដោនឡូដបានដល់ 40% ធៀបនឹង APK fat។</p>
      <pre><code># Build release App Bundle
flutter build appbundle --release</code></pre>

      <h2>៤. ពិនិត្យ audit Dependencies របស់អ្នក</h2>
      <p>រត់ <code>flutter pub deps</code> ហើយរកមើល packages ដែលទាញ native libraries ធំៗ។ ជំនួស packages ធ្ងន់ ដោយជម្រើសសាមញ្ញជាងដែលអាចធ្វើបាន។ ឧទាហរណ៍ ជំនួស <code>firebase_analytics</code> ដោយ client analytics ស្រាល ប្រសិនបើអ្នកត្រូវការតែការតាមដាន event មូលដ្ឋាន។</p>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>ជំហានបួននេះ — shrinking, ការបំប្លែង WebP, App Bundles, និងការ audit dependencies — បានកាត់កម្មវិធីរបស់ខ្ញុំពី 28 MB ចុះដល់ 17 MB ដោយមិនបានលុបមុខងារណាមួយ។ ចាប់ផ្តើមដោយ shrinking និង WebP; ពួកវាមានការខិតខំប្រឹងប្រែងតិចបំផុត ប៉ុន្តែបានផលចំណេញខ្ពស់បំផុត។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>每一个字节都很重要。研究表明，APK 大小每增加 6 MB，安装转化率就会下降约 1%。在审计了我的一款生产 Flutter 应用后，我使用四种有针对性的技术将其 APK 从 28 MB 减少到 17 MB —— 减少了 40%。</p>

      <h2>1. 启用资源与代码缩减</h2>
      <p>第一也是最容易的胜利是在您的 <code>build.gradle</code> 中启用缩减。这告诉 R8 自动删除未使用的代码和资源。</p>
      <pre><code>// android/app/build.gradle
buildTypes {
  release {
    minifyEnabled true      // 通过 R8 删除未使用的代码
    shrinkResources true    // 删除未使用的资源
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'),
                 'proguard-rules.pro'
  }
}</code></pre>

      <h2>2. 将图像转换为 WebP</h2>
      <p>PNG 和 JPEG 资源是大多数 APK 中最大的问题。转换为 WebP 通常每张图像可节省 25-35%，且没有明显的质量损失。在 Android Studio 中：右键点击任意 drawable 文件夹 → <em>转换为 WebP</em>。对于 Flutter 资源，请使用命令行中的 <code>cwebp</code>。</p>
      <pre><code># 将整个 assets 文件夹转换为 WebP（无损）
for f in assets/images/*.png; do
  cwebp -lossless "$f" -o "${blogImage}.webp"
done</code></pre>

      <h2>3. 使用 App Bundles 代替 APK</h2>
      <p>发布 Android App Bundle（<code>.aab</code>）而不是通用 APK。然后 Google Play 只会发送每个特定设备所需的资源和代码 —— 正确的屏幕密度、ABI 和语言 —— 与臃肿的 APK 相比，下载大小最多可减少 40%。</p>
      <pre><code># 构建发布版 App Bundle
flutter build appbundle --release</code></pre>

      <h2>4. 审计您的依赖项</h2>
      <p>运行 <code>flutter pub deps</code> 并查找拉入大型本地库的包。在可能的情况下用更轻量的替代品替换沉重的包。例如，如果您只需要基本的事件跟踪，可以将 <code>firebase_analytics</code> 替换为自定义的轻量级分析客户端。</p>

      <h2>结论</h2>
      <p>这四个步骤 —— 缩减、WebP 转换、App Bundles 和依赖审计 —— 将我的应用从 28 MB 减少到 17 MB，而无需删除任何功能。从缩减和 WebP 开始；它们的投入最少但收益最高。</p>
    `,
  },
  // ─────────────────────────────────────────────────────────────
  // BLOG 4
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
    images: [bloc_cubit,bloc_cubit2], // Maps accurately to your asset imports above
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
  void toggle() =&gt; emit(state == ThemeMode.light ? ThemeMode.dark : ThemeMode.light);
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
  builder: (context, state) =&gt; BlocProvider(
    create: (ctx) => SearchBloc(ctx.read&lt;SearchRepository&gt;()),
    child: const SearchPage(),
  ),
)</code></pre>

      <h2>Design Sealed, Immutable States</h2>
      <p>Never model state with multiple booleans — it creates invalid combinations. Use <code>sealed</code> classes (Dart 3+) or the <code>freezed</code> package for exhaustive, compiler-checked states.</p>
      <pre><code>sealed class OrderState {}
final class OrderInitial extends OrderState {}
final class OrderLoading extends OrderState {}
final class OrderSuccess extends OrderState {
  final Order order;
  OrderSuccess(this.order);
}
final class OrderFailure extends OrderState {
  final String message;
  OrderFailure(this.message);
}

// In the UI — switch is exhaustive, compiler will catch missing cases
switch (state) {
  case OrderInitial():  return const SizedBox.shrink();
  case OrderLoading():  return const CircularProgressIndicator();
  case OrderSuccess():  return OrderCard(order: state.order);
  case OrderFailure():  return ErrorView(message: state.message);
}</code></pre>

      <h2>Stream Management & Disposing</h2>
      <p><code>BlocProvider</code> closes your BLoC automatically when the widget leaves the tree. Only manage disposal manually if you instantiate a BLoC outside of <code>BlocProvider</code>.</p>
      <pre><code>class _MyPageState extends State&lt;MyPage&gt; {
  late final MyBloc _bloc;

  @override
  void initState() {
    super.initState();
    _bloc = MyBloc();
  }

  @override
  void dispose() {
    _bloc.close(); // required when created outside BlocProvider
    super.dispose();
  }
}</code></pre>

      <h2>Write Tests with bloc_test</h2>
      <p>The <code>bloc_test</code> package makes BLoC unit tests expressive and concise. Test every event-to-state path.</p>
      <pre><code>blocTest&lt;SearchBloc, SearchState&gt;(
  'emits [Loading, Loaded] on SearchQueryChanged',
  build: () =&gt; SearchBloc(FakeSearchRepository()),
  act: (bloc) =&gt; bloc.add(SearchQueryChanged('flutter')),
  wait: const Duration(milliseconds: 350), // wait for debounce
  expect: () =&gt; [isA&lt;SearchLoading&gt;(), isA&lt;SearchLoaded&gt;()],
);</code></pre>

      <h2>Conclusion</h2>
      <p>BLoC shines when you respect its structure: pick Cubit for simple cases, scope providers correctly, model states as sealed classes, and test every path. Follow these habits and your Flutter codebase will stay clean and confident as it scales.</p>
    `,
    contentKm: `
      <h2>សេចក្តីណែនាំ</h2>
      <p>បទរូបភាព BLoC (Business Logic Component) គឺជាឧបករណ៍ស្ថាបត្យកម្មដ៏មានអានុភាពបំផុតមួយរបស់ Flutter។ បន្ទាប់ពីប្រើប្រាស់វាក្នុងកម្មវិធី production ជាច្រើន ខ្ញុំបានប្រមូលវិធីអនុវត្តល្អបំផុតដែលរក្សាកូដ BLoC ឱ្យស្អាត ងាយធ្វើតេស្ត និងអាចថែទាំបាន — ជាពិសេសនៅពេលកម្មវិធីកើនធំ។</p>

      <h2>BLoC ធៀបនឹង Cubit — ជ្រើសឧបករណ៍ត្រឹមត្រូវ</h2>
      <p>Cubit គឺជាកំណែសាមញ្ញនៃ BLoC ដែលជំនួស events ដោយការហៅ method ដោយផ្ទាល់។ ប្រើ Cubit សម្រាប់តក្កវិទ្យាសាមញ្ញ ដែលមានតំបន់ជាក់លាក់។ ប្រើ BLoC នៅពេលអ្នកត្រូវការប្រវត្តិ event, transformations, ឬ debouncing។</p>
      <pre><code>// Cubit — ហៅ method ដោយផ្ទាល់
class ThemeCubit extends Cubit&lt;ThemeMode&gt; {
  ThemeCubit() : super(ThemeMode.light);
  void toggle() =&gt; emit(state == ThemeMode.light ? ThemeMode.dark : ThemeMode.light);
}

// BLoC — ដំណើរការតាម event, គាំទ្រ transformers
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

      <h2>ផ្តល់ BLoC នៅកម្រិតត្រឹមត្រូវ</h2>
      <p>តែងដាក់ <code>BlocProvider</code> នៅ widget ខ្ពស់បំផុតដែលត្រូវការ BLoC — មិនខ្ពស់ជាង មិនទាបជាង។ ការផ្តល់ខ្ពស់ពេកខ្ជះខ្ជាយ memory; ការផ្តល់ទាបពេកបណ្តាលឱ្យមានកំហុស missing-context។</p>
      <pre><code>// ✅ Scoped ត្រឹមត្រូវទៅ route ដែលត្រូវការវា
GoRoute(
  path: '/search',
  builder: (context, state) =&gt; BlocProvider(
    create: (ctx) =&gt; SearchBloc(ctx.read&lt;SearchRepository&gt;()),
    child: const SearchPage(),
  ),
)</code></pre>

      <h2>រចនា States ជា Sealed Classes មិនអាចផ្លាស់ប្តូរ</h2>
      <p>កុំដាក់ state ជា booleans ច្រើន — វាបង្កើតការផ្សំដែលមិនត្រឹមត្រូវ។ ប្រើ <code>sealed</code> classes (Dart 3+) ឬ package <code>freezed</code> សម្រាប់ states ដែល compiler ពិនិត្យបានពេញលេញ។</p>
      <pre><code>sealed class OrderState {}
final class OrderInitial extends OrderState {}
final class OrderLoading extends OrderState {}
final class OrderSuccess extends OrderState {
  final Order order;
  OrderSuccess(this.order);
}
final class OrderFailure extends OrderState {
  final String message;
  OrderFailure(this.message);
}

// ក្នុង UI — switch ពេញលេញ compiler នឹងចាប់ cases ដែលខ្វះ
switch (state) {
  case OrderInitial():  return const SizedBox.shrink();
  case OrderLoading():  return const CircularProgressIndicator();
  case OrderSuccess():  return OrderCard(order: state.order);
  case OrderFailure():  return ErrorView(message: state.message);
}</code></pre>

      <h2>ការគ្រប់គ្រង Stream និងការបិទ</h2>
      <p><code>BlocProvider</code> បិទ BLoC របស់អ្នកដោយស្វ័យប្រវត្តិ នៅពេល widget ចាកចេញពី tree។ គ្រប់គ្រងការបិទដោយដៃ តែប្រសិនបើអ្នកបង្កើត BLoC នៅខាងក្រៅ <code>BlocProvider</code>។</p>
      <pre><code>class _MyPageState extends State&lt;MyPage&gt; {
  late final MyBloc _bloc;

  @override
  void initState() {
    super.initState();
    _bloc = MyBloc();
  }

  @override
  void dispose() {
    _bloc.close(); // ចាំបាច់ នៅពេលបង្កើតនៅខាងក្រៅ BlocProvider
    super.dispose();
  }
}</code></pre>

      <h2>សរសេរតេស្តជាមួយ bloc_test</h2>
      <p>Package <code>bloc_test</code> ធ្វើឱ្យ unit tests BLoC មានភាពច្បាស់លាស់ និងសង្ខេប។ ធ្វើតេស្ត path event-to-state រាល់ចំណុច។</p>
      <pre><code>blocTest&lt;SearchBloc, SearchState&gt;(
  'emits [Loading, Loaded] on SearchQueryChanged',
  build: () =&gt; SearchBloc(FakeSearchRepository()),
  act: (bloc) =&gt; bloc.add(SearchQueryChanged('flutter')),
  wait: const Duration(milliseconds: 350), // រង់ចាំ debounce
  expect: () =&gt; [isA&lt;SearchLoading&gt;(), isA&lt;SearchLoaded&gt;()],
);</code></pre>

      <h2>សេចក្តីសន្និដ្ឋាន</h2>
      <p>BLoC នៅពេលអ្នកគោរពរចនាសម្ព័ន្ធរបស់វា: ជ្រើស Cubit សម្រាប់ករណីសាមញ្ញ scope providers ឱ្យបានត្រឹមត្រូវ កំណត់ states ជា sealed classes និងធ្វើតេស្តគ្រប់ path។ អនុវត្តទម្លាប់ទាំងនេះ ហើយ codebase Flutter របស់អ្នកនឹងស្អាត និងមានភាពជឿជាក់ នៅពេលវា scaling។</p>
    `,
    contentZh: `
      <h2>引言</h2>
      <p>BLoC（业务逻辑组件）模式是 Flutter 最强大的架构工具之一。在多个生产应用中使用了它之后，我收集了一套最佳实践，使 BLoC 代码保持干净、可测试和可维护 —— 尤其是在应用增长时。</p>

      <h2>BLoC 与 Cubit —— 选择合适的工具</h2>
      <p>Cubit 是 BLoC 的简化版本，用直接方法调用替换事件。将 Cubit 用于简单的、局部化的逻辑。当您需要事件历史、转换或防抖时，请使用 BLoC。</p>
      <pre><code>// Cubit — 直接方法调用
class ThemeCubit extends Cubit&lt;ThemeMode&gt; {
  ThemeCubit() : super(ThemeMode.light);
  void toggle() =&gt; emit(state == ThemeMode.light ? ThemeMode.dark : ThemeMode.light);
}

// BLoC — 事件驱动，支持转换器
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

      <h2>在正确的层级提供 BLoC</h2>
      <p>始终将 <code>BlocProvider</code> 放置在需要 BLoC 的最高组件中 —— 既不要更高，也不要更低。提供得太高会浪费内存；提供得太低会导致缺失上下文错误。</p>
      <pre><code>// ✅ 正确范围到需要它的路由
GoRoute(
  path: '/search',
  builder: (context, state) =&gt; BlocProvider(
    create: (ctx) =&gt; SearchBloc(ctx.read&lt;SearchRepository&gt;()),
    child: const SearchPage(),
  ),
)</code></pre>

      <h2>设计密封的、不可变的状态</h2>
      <p>切勿使用多个布尔值来建模状态 —— 这会产生无效的组合。使用 <code>sealed</code> 类（Dart 3+）或 <code>freezed</code> 包来实现穷举的、编译器检查的状态。</p>
      <pre><code>sealed class OrderState {}
final class OrderInitial extends OrderState {}
final class OrderLoading extends OrderState {}
final class OrderSuccess extends OrderState {
  final Order order;
  OrderSuccess(this.order);
}
final class OrderFailure extends OrderState {
  final String message;
  OrderFailure(this.message);
}

// 在 UI 中 —— switch 是穷举的，编译器会捕获缺失的 case
switch (state) {
  case OrderInitial():  return const SizedBox.shrink();
  case OrderLoading():  return const CircularProgressIndicator();
  case OrderSuccess():  return OrderCard(order: state.order);
  case OrderFailure():  return ErrorView(message: state.message);
}</code></pre>

      <h2>流管理与释放</h2>
      <p><code>BlocProvider</code> 在组件离开树时自动关闭您的 BLoC。只有在 <code>BlocProvider</code> 外部实例化 BLoC 时才需要手动管理释放。</p>
      <pre><code>class _MyPageState extends State&lt;MyPage&gt; {
  late final MyBloc _bloc;

  @override
  void initState() {
    super.initState();
    _bloc = MyBloc();
  }

  @override
  void dispose() {
    _bloc.close(); // 在 BlocProvider 外部创建时需要
    super.dispose();
  }
}</code></pre>

      <h2>使用 bloc_test 编写测试</h2>
      <p><code>bloc_test</code> 包使 BLoC 单元测试具有表现力且简洁。测试每个事件到状态的路径。</p>
      <pre><code>blocTest&lt;SearchBloc, SearchState&gt;(
  'emits [Loading, Loaded] on SearchQueryChanged',
  build: () =&gt; SearchBloc(FakeSearchRepository()),
  act: (bloc) =&gt; bloc.add(SearchQueryChanged('flutter')),
  wait: const Duration(milliseconds: 350), // 等待防抖
  expect: () =&gt; [isA&lt;SearchLoading&gt;(), isA&lt;SearchLoaded&gt;()],
);</code></pre>

      <h2>结论</h2>
      <p>当您遵守其结构时，BLoC 就会大放异彩：为简单情况选择 Cubit，正确范围提供者，将状态建模为密封类，并测试每条路径。养成这些习惯，您的 Flutter 代码库在扩展时将会保持干净和自信。</p>
    `,
  },

};

export default blogPosts;