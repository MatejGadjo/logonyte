import React from 'react';

const CookieComp = () => {
  return (
    <div className='sm:p-10'>
      <div className="pl-[5rem] sm:pl-0 max-w-screen-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 sm:mt-[-1rem]">Cookie Policy</h1>
        <p className="mt-4">
          <strong>1. Use of Cookies</strong>
        </p>
        <p>
          We use cookies to enhance your experience on our website and app. Cookies are small text files that are stored on your device to remember your login session and prevent you from being logged out when you refresh or leave the app. These cookies are essential for the functionality of our services.
        </p>

        <p className="mt-4">
          <strong>2. Types of Cookies</strong>
        </p>
        <p className='mt-2 ml-6'>
          <strong>2.1. Session Cookies:</strong> These cookies are temporary and are deleted when you log out or close your browser. They are used to maintain your session and ensure you stay logged in.
        </p>
        <p className='mt-2 ml-6'>
          <strong>2.2. Persistent Cookies:</strong> These cookies have a longer lifespan and expire after 7 days if you do not log out. They are used to provide a seamless experience when you return to our app within this period.
        </p>

        <p className="mt-4">
          <strong>3. User Consent</strong>
        </p>
        <p>
          By using our website and app, you consent to the use of cookies as described in this Cookie Policy. You can manage or disable cookies in your browser settings if you choose to do so. However, please note that some features of our app may not function correctly without cookies.
        </p>

        <p className="mt-4">
          <strong>4. Updates to Cookie Policy</strong>
        </p>
        <p>
          We reserve the right to update this Cookie Policy from time to time. Any changes will be posted on this page with the effective date. Your continued use of our services after the effective date constitutes your acceptance of the revised policy.
        </p>

        <p className="mt-4">
          <strong>5. Contact Us</strong>
        </p>
        <p>
          If you have any questions or concerns regarding our Cookie Policy, please contact us at [Contact Email].
        </p>
      </div>
    </div>
  );
};

export default CookieComp;
