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
    date: "June 2026",
    dateKm: "ខែមិគ្រី ២០២៦",
    readTime: "5 min read",
    readTimeKm: "ការអាន ៥ នាទី",
    tags: ["Flutter", "Architecture"],
    tagsKm: ["Flutter", "ស្ថាបត្យកម្ម"],
    images: [bloc, bloc2, bloc3, bloc4],
    description: "An in-depth comparison of Riverpod and BLoC patterns in large-scale Flutter applications, focusing on reactivity, testability, and code structure.",
    descriptionKm: "ការប្រៀបប្ដីពីទំនោរ Riverpod និង BLoC ក្នុងកម្មវិធី Flutter កម្រិតធំ ដែលផ្តល់អានុភាពលើសកម្មភាព ភាពងាយស្រួលក្នុងការធ្វើតេស្ត និងរចនាសម្ព័ន្ធកូដ។",
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
  },

  // ─────────────────────────────────────────────────────────────
  // BLOG 2
  // ─────────────────────────────────────────────────────────────
  blog2: {
    id: "blog2",
    title: "Building Premium Glassmorphic Custom UI in Flutter",
    titleKm: "ការបង្កើត UI Glassmorphic ប្រកបដោយភាពពិសេសក្នុង Flutter",
    date: "May 2026",
    dateKm: "ខែឧសភា ២០២៦",
    readTime: "4 min read",
    readTimeKm: "ការអាន ៤ នាទី",
    tags: ["UI/UX", "Design"],
    tagsKm: ["UI/UX", "រចនា"],
    images: [ui, ui2, ui3, ui4],
    description: "How to implement complex, high-end visual designs like premium dashboards using BackdropFilter and CustomPainter without external packages.",
    descriptionKm: "របៀបអនុវត្តការរចនា complex និង premium ដូចជា dashboard ប្រកបដោយភាពថ្លៃក្នុង Flutter ដោយប្រើ BackdropFilter និង CustomPainter ប៉ុន្តែមិនប្រើផ្កាយផ្សេង។",
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
  },
  // ─────────────────────────────────────────────────
  // BLOG 3
  // ─────────────────────────────────────────────────
  blog3: {
    id: "blog3",
    title: "How I Optimized Mobile App Size by 40%",
    titleKm: "របៀបដែលខ្ញុំបានកាត់បន្ថយទំហំកម្មវិធីទូរស័ព្ទបានដល់ 40%",
    date: "April 2026",
    dateKm: "ខែមេសា ២០២៦",
    readTime: "6 min read",
    readTimeKm: "ការអាន ៦ នាទី",
    tags: ["Optimization", "Android"],
    tagsKm: ["ការបង្កើនប្រសិទ្ធភាព", "Android"],
    images: [app, app2],
    description: "A practical guide to resource shrinking, ProGuard rules, image optimization, and dynamic delivery to achieve lightweight installation files.",
    descriptionKm: "វគ្គស្វ័យប្រវត្តិ practical ស្ដីអំពីការបង្កើនប្រសិទ្ធភាព resources shrinking, ProGuard rules, ការបង្កើនប្រសិទ្ធភាពរូបភាព និងការដឹកជញ្ជូនដដ្ឋានដើម្បីទទួលបានភាពអប្បបរមទំហំកម្មវិធី។",
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
  },
  // ─────────────────────────────────────────────────────────────
  // BLOG 4
  // ─────────────────────────────────────────────────────────────
  blog4: {
    id: "blog4",
    title: "Implementing BLoC & Cubit Pattern in Flutter: Best Practices",
    titleKm: "ការអនុវត្តបទរូបភាព BLoC និង Cubit ក្នុង Flutter: វិធីអនុវត្តល្អបំផុត",
    date: "July 2026",
    dateKm: "ខែកក្កដា ២០២៦",
    readTime: "7 min read",
    readTimeKm: "ការអាន ៧ នាទី",
    tags: ["Flutter", "BLoC", "Architecture"],
    tagsKm: ["Flutter", "BLoC", "ស្ថាបត្យកម្ម"],
    images: [bloc_cubit,bloc_cubit2], // Maps accurately to your asset imports above
    description: "Best practices for implementing BLoC pattern in Flutter for scalable and testable applications.",
    descriptionKm: "វិធីអនុវត្តល្អបំផុតសម្រាប់ការអនុវត្តបទរូបភាព BLoC ក្នុង Flutter សម្រាប់កម្មវិធីដែលអាចពង្រីកបាន និងងាយធ្វើតេស្ត។",
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
  },

};

export default blogPosts;