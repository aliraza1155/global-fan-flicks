import Image from 'next/image';

export default function PlatformComparisonPost() {
  return (
    <div style={{
      background: "radial-gradient(circle at top left, #0a0420 0%, #1a1a2e 50%, #0a0420 100%)",
      color: "#fff",
      padding: "2rem",
      minHeight: "100vh",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Title with Gradient */}
      <h1 style={{
        background: "linear-gradient(90deg, #ff007a, #a100ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "2.5rem",
        lineHeight: 1.3,
        marginBottom: "0.5rem",
        textAlign: "center"
      }}>
        OnlyFans vs Global Fan Flicks: The Ultimate Showdown
      </h1>
      
      {/* Subtitle */}
      <p style={{ 
        color: "#ff007a", 
        marginBottom: "2rem",
        fontSize: "1.2rem",
        fontWeight: 600,
        textAlign: "center"
      }}>
        Why top creators are switching and earning 3X more
      </p>

      {/* Hero Image */}
      <div style={{
        margin: "2rem 0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(161, 0, 255, 0.3)"
      }}>
        <Image 
          src="https://images.unsplash.com/photo-1585229608510-3099443a3adc?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Successful creator working"
          width={800}
          height={450}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Content */}
      <div style={{ lineHeight: "1.6" }}>
        {/* Introduction */}
        <div style={{
          background: "rgba(161,0,255,0.1)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "3px solid #a100ff",
          marginBottom: "2rem"
        }}>
          <p style={{ marginBottom: "0", fontWeight: 600 }}>
            🚨 Attention creators! If you&apos;re tired of OnlyFans taking 20% while doing nothing for you, keep reading...
          </p>
        </div>

        {/* Money Comparison */}
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: 600,
          margin: "2rem 0 1rem",
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "0.5rem"
        }}>
          The Brutal Truth About Your Earnings
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem"
        }}>
          <div style={{
            background: "rgba(255,0,122,0.1)",
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid rgba(255,0,122,0.3)"
          }}>
            <h3 style={{
              color: "#ff007a",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem"
            }}>OnlyFans</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>20% fee on ALL earnings</li>
              <li>No promotion help</li>
              <li>You do all the work</li>
              <li>Risk of sudden bans</li>
            </ul>
          </div>
          <div style={{
            background: "rgba(76,217,123,0.1)",
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid rgba(76,217,123,0.3)"
          }}>
            <h3 style={{
              color: "#4cd97b",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem"
            }}>Global Fan Flicks</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>Keep 90-100% of earnings</li>
              <li>We promote you daily</li>
              <li>We handle everything</li>
              <li>Account protection</li>
            </ul>
          </div>
        </div>

        {/* Earnings Calculator */}
        <div style={{
          background: "rgba(161,0,255,0.1)",
          padding: "1.5rem",
          borderRadius: "8px",
          marginBottom: "2rem"
        }}>
          <h3 style={{
            color: "#a100ff",
            fontSize: "1.3rem",
            fontWeight: 600,
            marginBottom: "1rem"
          }}>💰 See How Much More You Could Earn</h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1rem"
          }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>Monthly Sub Price</label>
              <select style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff"
              }}>
                <option>$5</option>
                <option>$10</option>
                <option>$20</option>
                <option>$50</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>Number of Fans</label>
              <select style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff"
              }}>
                <option>100</option>
                <option>500</option>
                <option>1000</option>
                <option>5000</option>
              </select>
            </div>
          </div>
          
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "1rem",
            borderRadius: "6px",
            textAlign: "center"
          }}>
            <div style={{ marginBottom: "0.5rem" }}>With Global Fan Flicks you could earn:</div>
            <div style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#4cd97b"
            }}>$12,000+ MORE per year</div>
          </div>
        </div>

        {/* Testimonials
        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "1.5rem",
          borderRadius: "8px",
          margin: "2rem 0",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h3 style={{
            color: "#a100ff",
            fontSize: "1.2rem",
            fontWeight: 600,
            marginBottom: "1rem"
          }}>
            Real Creator Results
          </h3>
          <div style={{ fontStyle: "italic", marginBottom: "1rem" }}>
            &quot;I switched from OnlyFans and tripled my income in 3 months while working LESS hours. Global Fan Flicks handles all my platforms and promotions - I just create content!&quot;
          </div>
          <div style={{ color: "#ff007a", fontWeight: 600 }}>@SophiaLuxe, Top 0.1% Creator</div>
        </div> */}

        {/* Feature Comparison */}
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: 600,
          margin: "2rem 0 1rem",
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "0.5rem"
        }}>
          Side-by-Side Comparison
        </h2>
        
        <div style={{ marginBottom: "2rem" }}>
          {[
            { feature: "Earnings Cut", onlyfans: "20%", gff: "0-10%" },
            { feature: "Promotion", onlyfans: "You do it all", gff: "We handle everything" },
            { feature: "Platforms Managed", onlyfans: "Only OnlyFans", gff: "OF, Fansly, Fanvue + Your Site" },
            { feature: "Content Rules", onlyfans: "Unpredictable", gff: "Clear guidelines" },
            { feature: "Support", onlyfans: "Slow tickets", gff: "Dedicated manager" },
            { feature: "Payout Speed", onlyfans: "7-10 days", gff: "Instant" }
          ].map((item, index) => (
            <div key={index} style={{ 
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "1rem",
              padding: "0.75rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              alignItems: "center"
            }}>
              <div style={{ fontWeight: 500 }}>{item.feature}</div>
              <div>{item.onlyfans}</div>
              <div style={{ color: "#4cd97b", fontWeight: 600 }}>{item.gff}</div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: 600,
          margin: "2rem 0 1rem",
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "0.5rem"
        }}>
          How We Make Your Life Easier
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem"
        }}>
          {[
            { emoji: "📈", title: "Daily Promotion", text: "We market you across all platforms" },
            { emoji: "💬", title: "Fan Management", text: "We handle all messages & requests" },
            { emoji: "📊", title: "Analytics", text: "Real-time performance tracking" },
            { emoji: "🛡️", title: "Protection", text: "Account security & ban prevention" }
          ].map((item, index) => (
            <div key={index} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.emoji}</div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.9rem" }}>{item.text}</div>
            </div>
          ))}
        </div>

        {/* Urgency CTA */}
        <div style={{
          background: "linear-gradient(45deg, #ff007a, #a100ff)",
          padding: "1.5rem",
          borderRadius: "12px",
          margin: "3rem 0",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(161, 0, 255, 0.3)"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#fff"
          }}>
            {/* LIMITED TIME OFFER */}
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            {/* First 10 models to join this week get: */}
          </p>
          <ul style={{
            listStyle: "none",
            paddingLeft: "0",
            marginBottom: "1.5rem"
          }}>
            {/* <li style={{ marginBottom: "0.5rem" }}>✅ Free premium promotion ($500 value)</li>
            <li style={{ marginBottom: "0.5rem" }}>✅ Priority verification</li>
            <li style={{ marginBottom: "0.5rem" }}>✅ Dedicated account manager</li> */}
          </ul>
          <a 
            href="https://app.globalfanflicks.com" 
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#a100ff",
              padding: "0.8rem 2rem",
              borderRadius: "50px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1.1rem",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            CLAIM YOUR SPOT NOW
          </a>
        </div>

        {/* Final CTA */}
        <div style={{ 
          textAlign: "center",
          margin: "3rem 0"
        }}>
          <p style={{ marginBottom: "1rem" }}>
            Still have questions? Chat with us directly:
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap"
          }}>
            <a 
              href="https://t.me/GlobalFanFlicks" 
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "0.8rem 1.5rem",
                borderRadius: "50px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              Telegram: @GlobalFanFlicks
            </a>
            <a 
              href="https://wa.me/17262425583" 
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "0.8rem 1.5rem",
                borderRadius: "50px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              WhatsApp: +1 (726) 242-5583
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}