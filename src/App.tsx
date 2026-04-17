import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, BookOpen, Cross, Users, MapPin, Phone, Clock, 
  ExternalLink, Facebook, Youtube, Play, ChevronRight 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gospel', href: '#gospel' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-primary-dark/90 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center border-b border-gold/10 pb-4">
        <a href="#home" className="flex flex-col group">
          <span className="font-serif text-2xl lg:text-3xl text-cream leading-tight">Christ Fellowship</span>
          <span className="text-[10px] lg:text-xs text-gold tracking-[0.2em] uppercase font-bold -mt-1 group-hover:text-cream transition-colors">of Central Louisiana</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-cream/90 hover:text-gold text-sm font-bold uppercase tracking-widest relative group transition-colors"
            >
              {link.name}
              <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-primary-dark z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-cream text-3xl font-serif hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20">
      <div className="absolute inset-0 z-0 bg-cross-pattern opacity-5"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/80 to-primary-dark"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[400px_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:items-end text-center lg:text-right lg:border-r lg:border-gold/30 lg:pr-12 py-12"
        >
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gold/30 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://cfcenla.com/wp-content/uploads/2022/07/294326050_2277609865711722_1542485184882779704_n-e1658509184853-300x182.jpeg" 
              alt="Christ Fellowship Logo" 
              referrerPolicy="no-referrer"
              className="relative w-48 lg:w-64 rounded-lg border border-cream shadow-2xl"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4 font-bold tracking-tight text-shadow-elegant">
            Christ Fellowship <br className="hidden lg:block" /> of Cenla
          </h1>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-lg md:text-xl mb-6"
          >
            A church devoted to the fellowship of the gospel.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-cream/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light"
          >
            We are a church in Central Louisiana devoted to the fellowship of the gospel, and beyond that to the Reformed Faith, as it is expressed in the 1689 London Baptist Confession.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#about" className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 font-bold uppercase tracking-widest rounded-[2px] text-[11px]">
              Learn More
            </a>
            <a href="#gospel" className="px-10 py-4 bg-gold text-primary-dark hover:bg-cream transition-all duration-300 font-bold uppercase tracking-widest rounded-[2px] text-[11px]">
              The Gospel
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-full max-w-4xl py-6 border-y border-cream/20 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 px-4"
          >
            <div className="flex items-center space-x-3 text-cream/70 text-xs uppercase tracking-wider">
              <Clock size={16} className="text-gold" />
              <span><strong className="text-gold">Sun Prayer:</strong> 9:30 AM</span>
            </div>
            <div className="flex items-center space-x-3 text-cream/70 text-xs uppercase tracking-wider">
              <Clock size={16} className="text-gold" />
              <span><strong className="text-gold">Sun Service:</strong> 10:30 AM</span>
            </div>
            <div className="flex items-center space-x-3 text-cream/70 text-xs uppercase tracking-wider">
              <Clock size={16} className="text-gold" />
              <span><strong className="text-gold">Wed Service:</strong> 6:30 PM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ label, title, light = false, centered = true }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 ${centered ? 'text-center' : ''}`}
  >
    <span className={`text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block`}>{label}</span>
    <h2 className={`font-serif text-3xl md:text-5xl font-bold ${light ? 'text-cream' : 'text-primary-dark'}`}>{title}</h2>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div id="about" className="scroll-mt-20">
      {/* 2A - Our Story */}
      <section className="py-24 bg-cream relative">
        <div className="container mx-auto px-6">
          <SectionHeading label="ABOUT US" title="Who We Are" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl md:text-2xl text-ink/80 leading-relaxed mb-8">
              We are a church in Central Louisiana that is devoted to the fellowship of the gospel, and beyond that to the Reformed Faith, as it is expressed in the 1689 London Baptist Confession.
            </p>
            <a 
              href="https://founders.org/library-book/1689-confession/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-300 font-bold uppercase tracking-widest text-sm"
            >
              <span>1689 London Baptist Confession</span>
              <ChevronRight size={18} />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { 
                icon: <BookOpen className="text-gold" />, 
                title: "The Word", 
                text: "We are committed to expository preaching and the authority of Holy Scripture in all matters of faith and life." 
              },
              { 
                icon: <Cross className="text-gold" />, 
                title: "The Gospel", 
                text: "We exist to proclaim the good news of Jesus Christ — His life, death, and resurrection for sinners." 
              },
              { 
                icon: <Users className="text-gold" />, 
                title: "The Fellowship", 
                text: "We are a family of believers devoted to one another in love, gathered around Christ." 
              }
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-lg shadow-sm border-t-4 border-gold group hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-cream w-fit rounded-full group-hover:bg-gold group-hover:text-cream transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary-dark">{card.title}</h3>
                <p className="text-muted leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2B - Our Beliefs */}
      <section id="beliefs" className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-cross-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
          <Cross size={400} className="text-cream" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading label="OUR BELIEFS" title="The Christ Fellowship Statement of the Gospel" light />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="h-0.5 w-24 bg-gold mx-auto mb-12"></div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-6 text-gold/10 font-serif text-[120px] leading-none pointer-events-none select-none">&ldquo;</div>
              <p className="font-serif italic text-cream/90 text-lg md:text-2xl leading-[1.9] text-center mb-12 border-l-4 border-gold pl-8 md:pl-12">
                We believe that Jesus is the Christ, the Son of the Living God, that God raised Him from the dead and He is Lord, and therefore we have nowhere else to go, for He has the words of eternal life.
                <br /><br />
                We believe that He is the promised Son who crushed the serpent's head, that He was born of the Virgin Mary by the Power of the Holy Spirit, He therefore is truly Man and yet truly God, nevertheless He is but One Person, the Lord Jesus Christ, who by His incarnation became the New Adam who obeyed the Law of God on our behalf, all the way to the point of death, even the death of the cross, that He was buried, but according to the Scriptures and His own righteousness, He was not allowed to suffer decay but was raised up on the third day by the power of God for our justification, and after appearing to many witnesses He ascended into heaven where He sat down at the right hand of the Majesty on high, where having finished His work He ever lives to intercede for us, and is able to save to the uttermost any who come to God through Him, if they come by faith alone in Him alone apart from works of the Law, and that from this position of glory He rules the world, that He will return to judge those who do not obey the gospel and to save those who do, and that having been raised from the dead in their glorious bodies, fully redeemed from the curse of sin, the law, and the grave, they shall ever be with the Lord, shall ever go on increasing in the knowledge of His grace, and shall ever go on glorifying Him and enjoying Him, unto the ages of the ages, Amen.
              </p>
            </div>

            <div className="h-0.5 w-24 bg-gold mx-auto mt-12 mb-8"></div>

            <div className="text-center">
              <p className="text-cream/60 italic mb-10 text-sm uppercase tracking-widest">
                For a fuller description of our beliefs, see the 1689 Baptist Confession of Faith.
              </p>
            <a 
              href="https://founders.org/library-book/1689-confession/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 font-bold uppercase tracking-widest rounded-[2px] inline-flex items-center space-x-2 text-[11px]"
            >
              <span>View the 1689 Confession</span>
              <ChevronRight size={18} />
            </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2C - Leadership */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <SectionHeading label="LEADERSHIP" title="Pastors & Elders" />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Jeffrey Mercer */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border-t-[6px] border-gold"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full border-2 border-gold p-1 shadow-lg mb-6 overflow-hidden">
                  <img 
                    src="https://cfcenla.com/wp-content/uploads/2023/08/IMG_8735.jpeg" 
                    alt="Jeffrey Mercer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary-dark mb-1">Jeffrey Mercer</h3>
                <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6">Pastor</p>
                <div className="w-12 h-0.5 bg-cream mb-6"></div>
                <p className="text-ink/70 leading-relaxed italic">
                  &ldquo;Jeffrey Mercer was called to the gospel ministry in 2006, after which he entered into seminary. Then in 2010 he was called to pastor Christ Fellowship of Cenla, where he has ministered ever since. He is husband to Challie, and father to Anabelle and Abram. Jeffrey's favorite verses are the verses on which he's currently preaching.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Justin Morgan */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border-t-[6px] border-gold"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full border-2 border-gold p-1 shadow-lg mb-6 overflow-hidden">
                  <img 
                    src="https://cfcenla.com/wp-content/uploads/2025/07/justinmorganheadshot-7463-scaled.jpeg" 
                    alt="Justin Morgan" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary-dark mb-1">Justin Morgan</h3>
                <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6">Pastor</p>
                <div className="w-12 h-0.5 bg-cream mb-6"></div>
                <p className="text-ink/70 leading-relaxed italic">
                  &ldquo;Justin Morgan began attending Christ Fellowship in 2011 and was called to the gospel ministry in 2024. He is currently enrolled at Grace Bible Theological Seminary in the Certificate of Ministry Program. He is husband to Cacy, and father to Liam, Truett, Conrad, and Elliot.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Gospel = () => {
  return (
    <section id="gospel" className="py-0 bg-primary-dark scroll-mt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://cfcenla.com/wp-content/uploads/2025/02/Heading.jpg" 
          alt="The Gospel" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
        <div className="absolute bottom-12 left-0 right-0 text-center container mx-auto px-6">
          <SectionHeading label="THE GOSPEL OF JESUS CHRIST" title="Good News for Sinners" light />
        </div>
      </div>

      <div className="py-24 bg-cross-pattern">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center italic text-cream/90 text-xl md:text-2xl leading-relaxed border-l-4 border-gold pl-8 md:pl-0 md:border-l-0"
          >
            <p className="mb-8 font-light italic">
              At some point in your life, you've likely wondered: Why there is so much suffering and injustice in the world — and whether God has a plan to end it?
            </p>
            <p className="font-serif text-gold text-2xl md:text-3xl">
              The Bible answers both questions through two men, and what it teaches is: <span className="text-cream underline underline-offset-8">Adam brought it all, but Christ is ending it all.</span>
            </p>
          </motion.div>

          <article className="prose prose-invert prose-cream max-w-none">
            <h3 className="font-serif text-3xl md:text-5xl text-gold mb-10 flex items-center space-x-4">
              <span className="h-px bg-gold/30 flex-grow"></span>
              <span>TWO MEN</span>
              <span className="h-px bg-gold/30 flex-grow"></span>
            </h3>

            <div className="space-y-8 text-cream/80 text-lg leading-[1.8] font-light">
              <p>
                <strong className="text-cream text-xl font-serif">All historians have a problem.</strong> What do they include and what do they exclude from their accounts of world history? There are just too many facts, so they must decide what's significant and what's not. For example, it would be historical for a man to spend his whole lifetime researching the average number of belt loops ever used on pants. But that would hardly be significant! Well, when we come to the Bible we find two men are significant in world history. We find the apostle Paul looking all the way back to the beginning and referring to Adam as &quot;the first man&quot; (1 Corinthians 15:47).
              </p>

              <p>
                <strong className="text-cream">That's obvious to us because he is the first man to ever live.</strong> But then he shocks us. From there he scans across thousands of years, the lives of men like Alexander the Great and Aristotle are overlooked, and he fixes his eye on Jesus and calls Him &quot;the second man.&quot; This raises an obvious question. If Jesus is not the second man to ever live why did Paul give Him that name?
              </p>

              <p>
                <strong className="text-gold uppercase tracking-widest text-sm">Richard Gaffin</strong> writes: As Paul is looking at things in this passage, no one between them &#39;counts.&#39; (p. 47 By Faith, Not By Sight) <strong className="text-gold uppercase tracking-widest text-sm">Douglas Moo</strong> explains: <em className="text-cream/90">All people, Paul teaches, stand in relationship to one of two men, whose actions determine the eternal destiny of all who belong to them.</em>
              </p>

              <p>
                <strong className="text-cream">Either one &#39;belongs to&#39; Adam and is under sentence of death because of his sin… or one belongs to Christ and is assured of eternal life because of his &#39;righteous&#39; act</strong>… The actions of Adam and Christ, then, are similar in having &#39;epochal&#39; significance. (Romans, p.314-315) We say certain movies have &#39;epic battle scenes&#39; by which we mean they have far reaching effects in the world. So Moo is saying these two men are &quot;epic&quot; due to the far reaching effects they have upon the world.
              </p>

              <p>
                <strong className="text-cream">Simply and yet staggeringly put,</strong> these two men have &#39;epochal significance&#39; because they have &#39;everyone significance&#39;! They are the representatives of two human races. One represents the old humanity of the old fallen creation. The other represents the new humanity of the new redeemed creation. And just as the actions of a representative in our country are counted to those whom he represents, even so the actions of these two representatives are counted to those whom they represent. The actions of the representative are counted as the actions of those represented. This is why they &#39;count&#39; so much! So we could say these two men &#39;count&#39; for all men.
              </p>

              <p className="border-l-2 border-gold/30 pl-8 italic">
                <strong className="text-gold">Therefore the only question that remains is to ask &quot;what exactly has been counted to all men as a result of the actions of these two men?&quot;</strong>
              </p>
            </div>

            <h3 className="font-serif text-3xl md:text-5xl text-gold my-16 flex items-center space-x-4">
              <span className="h-px bg-gold/30 flex-grow"></span>
              <span>ALL MEN</span>
              <span className="h-px bg-gold/30 flex-grow"></span>
            </h3>

            <div className="space-y-8 text-cream/80 text-lg leading-[1.8] font-light">
              <p>
                Well, in Romans 5:18-19 we find the answer… <strong className="text-gold font-bold">FIRST,</strong> in 5:18-19 we see that all men are either counted condemned or justified. 5:18 speaks of either &#39;condemnation to all men&#39; or &#39;justification of life to all men.&#39; And 5:19 speaks of men as being either &#39;appointed sinners&#39; or &#39;appointed righteous.&#39; This one simple truth shatters religion! Every person you know is either 100% condemned as a sinner or 100% justified as righteous in the sight of God. Nobody is &quot;pretty good&quot;, or able to say &quot;well nobody&#39;s perfect.&quot; Nor is anyone in any religious process of becoming good enough. Everyone on this planet right now today is in a condemned or justified state. This is shocking! And it&#39;s because the word &#39;justify&#39; means to declare right not to make right. It is a legal act not a surgical act. It happens outside of you not inside of you. It&#39;s concerned with what God thinks about you not what you think about you. We know this because it&#39;s contrasted here with condemnation.
              </p>

              <p>
                <strong className="text-cream">For instance, when a judge condemns a man, does he make that man wicked?</strong> Absolutely not, he declares him to be wicked. In the same way then, when God justifies someone, He is not making them righteous, but declaring them to be righteous. In fact, justification is for &#39;the ungodly&#39; (Romans 4:5)! So this means that in God&#39;s sight all men are either declared to be righteous or sinful. There is no &#39;in between.&#39; You are either fully accepted or rejected.
              </p>

              <p>
                <strong className="text-gold font-bold">SECOND,</strong> we also see in 5:18-19 why all men are either counted condemned or justified, and it&#39;s because all men are either connected to Adam&#39;s transgression or to Christ&#39;s righteousness. If the first truth shattered religion, this one grinds it to powder!
              </p>

              <p>
                <strong className="text-cream">According to the Bible a man&#39;s transgression leads to death</strong> (Genesis 2:17, Ezekiel 18:4, Romans 6:23) <strong className="text-cream">and a man&#39;s righteousness leads to life</strong> (Luke 10:25-28, Romans 7:10, Romans 10:5). So if you are righteous you will live, but if you are sinful you will die. But notice what this verse does not say. It does not say that all men are either condemned or justified &#39;through their own&#39; transgressions or righteous acts. Rather, it specifically says &#39;through one transgression&#39; and &#39;through the one man&#39;s disobedience condemnation is counted to all men and the many are appointed sinners.&#39;
              </p>

              <p>
                <strong className="text-cream">And on the other side</strong> &#39;through one act of righteousness&#39; and &#39;through the obedience of the One&#39; justification is counted to all men and the many are appointed righteous! What this means is that your eternal destiny of death or life is not determined by your own sins or righteous acts! It is determined by the actions of another! So, you are either &quot;in Adam&quot; and you will get death, or you are &quot;in Christ&quot; and you will get life (1 Corinthians 15:22). This is the pride humbling, despair lifting gospel of Jesus Christ!
              </p>

              <p>
                <strong className="text-cream">Now what is the implication of such good news?</strong> THERE&#39;S NO BOASTING. <strong className="text-gold uppercase tracking-widest text-sm">Martyn Lloyd-Jones</strong> tells us: <em className="text-cream/90">Look at yourself in Adam; though you had done nothing you were declared a sinner. Look at yourself in Christ; and see that, though you have done nothing, you are declared to be righteous. That is the parallel. We must get rid of all thoughts of our actions. There is no boasting. We do nothing; all we are and have results from the obedience of the One — our Lord.</em> (p.274, Romans, vol4)
              </p>

              <p>
                <strong className="text-cream">That&#39;s what I want you to do, look at yourself in all this to see where you are.</strong> Sometimes in a mall you&#39;ll see the map that says &quot;you are here.&quot; Well where are you in all this? We have seen that there are these two men, and their actions determine the destinies of all men. Are you in Adam or in Christ? Are you justified or condemned? Are you believing, or are you working? Because the gospel comes to you as a message of salvation accomplished not a message for you to accomplish salvation. It comes proclaiming a deed already finished and done, that you might be finished and done with deeds. It announces the absolute irrelevance of your actions. It not only says that your deeds do not justify you, they don&#39;t even condemn you!
              </p>

              <p>
                <strong className="text-cream">As a matter of fact, all that was needed to condemn you or justify you occurred before you were ever born!</strong> You could even say it was finished before some religions ever started! Is this not what Jesus cried out upon the cross? &quot;Jesus, knowing that all things had already been finished… said &#39;It is finished!&#39;&quot; (John 19:28-30) So don&#39;t be hard of hearing, but listen to the Savior Himself! Was His life not perfect enough that you must add your goodness to it? Was His death not perfect enough that you must add your groanings to it? God Himself told us it was enough when He raised Him from the dead! He was raised for our justification, to prove that acceptance with God is found in Him (Romans 4:25). The resurrection was God&#39;s &quot;Amen&quot; to the Lord&#39;s words &quot;it is finished.&quot; Genesis says God rested from His works on the seventh day since creation was finished, and the gospel calls you to rest from your works in the day of Christ because redemption is finished! (John)
              </p>

              <p>
                <strong className="text-cream">Do you want assurance of salvation?</strong> You will never find it in yourself! A ship being tossed to and fro must toss its anchor outside of itself to find security, and so you must toss the anchor of your confidence outside of yourself into Christ alone. If not, you will forever be tossed about by fear and doubt. Why wait any longer? Believe the good news of the gospel! Get rid of all thoughts of your actions and get full of thoughts about His actions! Then you will get full of assurance! &quot;Whoever believes in Him will not be disappointed&quot; (Romans 10:11)
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-20 p-12 bg-cream/10 border-l-8 border-gold text-center relative"
            >
              <div className="absolute top-4 left-4 text-gold/20 font-serif text-8xl leading-none">&ldquo;</div>
              <p className="font-serif italic text-gold text-2xl md:text-3xl leading-relaxed mb-6">
                So then as through one transgression there resulted condemnation to all men, even so through one act of righteousness there resulted justification of life to all men. For as through the one man&#39;s disobedience the many were appointed sinners, even so through the obedience of the One the many will be appointed righteous.
              </p>
              <p className="text-cream/70 font-bold uppercase tracking-widest">— Romans 5:18-19</p>
            </motion.div>
          </article>

          <div className="mt-24 flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#beliefs" className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 font-bold uppercase tracking-widest rounded-[2px] inline-flex items-center space-x-2 text-[11px]">
              <span>Our Beliefs</span>
              <ChevronRight size={18} />
            </a>
            <a href="#contact" className="px-10 py-4 bg-gold text-primary-dark hover:bg-cream transition-all duration-300 font-bold uppercase tracking-widest rounded-[2px] inline-flex items-center space-x-2 text-[11px]">
              <span>Contact Us</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-6">
        <SectionHeading label="CONTACT US" title="Come Worship With Us" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <MapPin className="text-gold" />, 
                  title: "Location", 
                  content: (
                    <>
                      Currently meeting in the Lake Charles room at the Holiday Inn Downtown Alexandria.<br />
                      701 4th St, Alexandria, LA 71301<br />
                      <a href="https://maps.app.goo.gl/WBrLFvcmdGSuR5Lk6" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline mt-2 inline-flex items-center space-x-1">
                        <span>Get Directions</span>
                        <ExternalLink size={14} />
                      </a>
                    </>
                  )
                },
                { 
                  icon: <Phone className="text-gold" />, 
                  title: "Phone", 
                  content: (
                    <a href="tel:3184194497" className="hover:text-gold transition-colors">(318) 419-4497</a>
                  )
                },
                { 
                  icon: <Clock className="text-gold" />, 
                  title: "Service Times", 
                  content: (
                    <div className="space-y-2">
                      <p><strong className="text-primary-dark">Sunday</strong><br />Prayer: 9:30 AM – 10:00 AM<br />Service: 10:30 AM – 12:00 PM</p>
                      <p><strong className="text-primary-dark">Wednesday</strong><br />Service: 6:30 PM – 7:30 PM</p>
                    </div>
                  )
                },
                { 
                  icon: <Youtube className="text-gold" />, 
                  title: "Media", 
                  content: (
                    <div className="space-y-2">
                      <a href="https://www.sermonaudio.com/source_detail.asp?sourceid=christfelowship" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline flex items-center space-x-2">
                        <span>SermonAudio</span>
                        <ExternalLink size={14} />
                      </a>
                      <a href="https://www.youtube.com/@christfellowshipofcenla3356/streams" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline flex items-center space-x-2">
                        <span>YouTube Live</span>
                        <ExternalLink size={14} />
                      </a>
                      <a href="https://www.facebook.com/cfcenla/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline flex items-center space-x-2 text-sm font-bold uppercase tracking-wider mt-4">
                        <Facebook size={16} />
                        <span>Follow Us</span>
                      </a>
                    </div>
                  )
                }
              ].map((info, i) => (
                <motion.div 
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-gold group hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4">{info.icon}</div>
                  <h4 className="font-serif text-xl font-bold mb-3 text-primary-dark">{info.title}</h4>
                  <div className="text-muted leading-relaxed text-sm md:text-base">{info.content}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border-4 border-gold shadow-2xl h-[300px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.664421066847!2d-92.4491763!3d31.3117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863adedc352796eb%3A0xc3f8e58a74b1e56b!2sHoliday%20Inn%20Alexandria-Downtown%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1713360000000!5m2!1sen!2sus" 
                className="w-full h-full grayscale-[0.3]" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Action Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-dark p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cross-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl text-cream mb-6">Register & Give Online</h3>
              <p className="text-cream/80 text-lg leading-relaxed mb-10 font-light">
                Support the ministry of Christ Fellowship of Cenla. All giving and event registration is handled securely through Planning Center.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://www.planningcenter.com/pricing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-gold text-primary-dark transition-all duration-300 font-extrabold uppercase tracking-widest rounded-xl flex items-center justify-center space-x-3 hover:bg-cream hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-lg">Give & Register Online</span>
                  <ChevronRight size={20} />
                </a>
                <p className="text-cream/40 text-[10px] text-center uppercase tracking-widest font-bold">
                  Securely processed by Planning Center
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary-dark pt-20 pb-10 border-t border-gold/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col">
            <a href="#home" className="flex flex-col mb-6">
              <span className="font-serif text-3xl text-cream leading-tight">Christ Fellowship</span>
              <span className="text-xs text-gold tracking-[0.2em] uppercase font-bold -mt-1 underline decoration-gold/30">of Central Louisiana</span>
            </a>
            <p className="text-cream/60 max-w-sm font-light">
              Devoted to the fellowship of the gospel and the Reformed Faith.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Navigation</h5>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Gospel', 'Contact Us'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase().replace(' ', '')}`} className="text-cream/70 hover:text-gold transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Resources</h5>
              <ul className="space-y-3">
                <li><a href="https://founders.org/library-book/1689-confession/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors">1689 Confession</a></li>
                <li><a href="https://www.sermonaudio.com/source_detail.asp?sourceid=christfelowship" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors">SermonAudio</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Contact Info</h5>
            <div className="flex items-start space-x-3 text-cream/70">
              <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
              <span>701 4th St, Alexandria, LA 71301</span>
            </div>
            <div className="flex items-center space-x-3 text-cream/70">
              <Phone size={20} className="text-gold" />
              <span>(318) 419-4497</span>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/cfcenla/" className="p-3 rounded-full bg-cream/5 text-cream hover:text-gold hover:bg-gold/10 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 bg-white/5 px-6 py-3 rounded-full border border-gold/10">
            <span className="text-[10px] uppercase tracking-widest text-cream/70"><strong className="text-gold">Sun Prayer</strong> 9:30 AM</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70"><strong className="text-gold">Sun Service</strong> 10:30 AM</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70"><strong className="text-gold">Wednesday</strong> 6:30 PM</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-cream/40 text-[10px] tracking-widest font-bold uppercase mb-2">
              &copy; 2025 Christ Fellowship of Cenla &middot; cfcenla.com
            </p>
            <p className="text-cream/30 text-[9px] tracking-[0.2em] font-light uppercase">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-dots">
      <div className="absolute inset-0 bg-primary-dark/20 pointer-events-none z-[-1]"></div>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Gospel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
