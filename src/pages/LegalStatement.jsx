import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const Legal = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-40 px-30">
        <h1 className="bower font-bold text-6xl">Legal Statement</h1>
        <div className="mt-10 space-y-10">
          <div>
            <p className="bower text-2xl font-bold">1. Limitation of Liability</p>
            <p className="brogman tracking-wider mt-4">
              To the fullest extent permitted under applicable law, AGI Growth X
              disclaims all liability for any direct, indirect, incidental,
              consequential, special, punitive, or other damages — including but
              not limited to loss of data, loss of business, or loss of profits
              — arising from or related to the use of this Site or any linked
              third-party site.
            </p>
            <p className="brogman tracking-wider mt-4">
              All materials on this Site are provided “as is” and “as
              available,” without warranties of any kind, either express or
              implied, including but not limited to merchantability, fitness for
              a particular purpose, or non-infringement.
            </p>
          </div>

          <div>
            <p className="bower text-2xl font-bold">2. Third-Party Links</p>
            <p className="brogman tracking-wider mt-4">
              This Site may contain links to external websites or platforms,
              including Darwinbox. AGI Growth X is not responsible for the
              content, privacy practices, accuracy, or reliability of these
              external sites. The inclusion of any link does not imply
              endorsement or recommendation by AGI Growth X.
            </p>
            <p className="brogman tracking-wider mt-4">
              Users should exercise their own discretion when accessing
              third-party websites.
            </p>
          </div>

          <div>
            <p className="bower text-2xl font-bold">3. Intellectual Property</p>
            <p className="brogman tracking-wider mt-4">
              Unless otherwise stated, all materials on this Site — including
              logos, content, layout, images, and design elements — are the
              intellectual property of AGI Growth X and are protected by
              copyright, trademark, and other applicable laws. Reproduction,
              distribution, or modification of any content from this Site
              without prior written permission from AGI Growth X is strictly
              prohibited.
            </p>
            <p className="brogman tracking-wider mt-4">
              “AGI Growth X” and all related marks, logos, and taglines are
              trademarks or service marks of AGI Growth X and may not be used
              without authorization.
            </p>
          </div>

          <div>
            <p className="bower text-2xl font-bold">
              4. No Professional Relationship
            </p>
            <p className="brogman tracking-wider mt-4">
              Your use of this Site does not create any business, advisory, or
              professional services relationship between you and AGI Growth X.
              For specific inquiries, project discussions, or engagements,
              please contact us directly.
            </p>
          </div>

          <div>
            <p className="bower text-2xl font-bold">5. Right to Modify</p>
            <p className="brogman tracking-wider mt-4">
              AGI Growth X reserves the right to modify, update, or discontinue
              any aspect of this Site or these terms at any time without prior
              notice. Continued use of the Site constitutes acceptance of such
              changes.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
};
