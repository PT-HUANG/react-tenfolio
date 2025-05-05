import Card from "./Card";
import EmailForm from "./EmailForm";

function Contact() {
  return (
    <>
      <div id="contact" className="bg-[#000e24] py-20">
        <div className="w-[80%] h-[90%] max-w-[1400px] mx-auto truncate">
          <div className="text-white text-center text-xl font-bold mb-4 pt-6 pr-8 md:text-3xl md:mx-6">
            Contact
          </div>
          <div className="w-full mx-auto flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
            <div className="w-full max-w-[500px] flex flex-col items-center lg:mt-6 lg:pl-12">
              <Card
                link="tel:+886978003858"
                target=""
                text="+886978003858"
                icon="fa-solid fa-phone"
              />
              <Card
                link="mailto:qwe1593574268@gmail.com"
                target=""
                text="qwe1593574268@gmail.com"
                icon="fa-solid fa-envelope"
              />
              <Card
                link="https://github.com/PT-HUANG/"
                target="_blank"
                text="GitHub"
                icon="fa-brands fa-github"
              />
              <Card
                link="https://www.linkedin.com/in/%E5%AF%B6%E7%94%B0-%E9%BB%83-b52370339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                text="Linkedin"
                icon="fa-brands fa-linkedin-in"
              />
            </div>
            <div className="w-full max-w-[500px] mx-4 mt-8">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
