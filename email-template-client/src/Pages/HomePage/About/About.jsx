const About = () => {
  return (
    <>
      <div className="flex flex-col items-center my-[3%] gap-y-4">
        <span className="font-bold text-3xl bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          About Us
        </span>
        <span className="w-[40%] h-[3px] bg-gradient-to-r from-orange-600 via-transparent to-orange-600"></span>
      </div>

      <p className="text-center text-gray-600 w-1/2 mx-auto leading-9 mb-[4%]">
        Welcome to MailCanvas, your ultimate solution for creating stunning,
        professional email templates with ease. We are dedicated to empowering
        individuals, businesses, and marketers with a user-friendly platform
        that combines creativity and simplicity. With our intuitive
        drag-and-drop interface, customizable templates, and advanced features,
        you can design visually captivating emails tailored to your brand—no
        coding required. Whether it’s newsletters, promotional emails, event
        invitations, or transactional messages, MailCanvas ensures your emails
        not only look great but also drive results. Our platform offers a vast
        library of modern templates, design elements, and seamless integrations,
        making it easier than ever to engage your audience and achieve your
        goals. At MailCanvas, we bring your ideas to life, one pixel at a time.
      </p>
    </>
  );
};

export default About;
