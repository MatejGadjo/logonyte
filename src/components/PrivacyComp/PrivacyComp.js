import React from 'react';

const PrivacyComp = () => {
  return (
    <div className='sm:p-10'>
      <div className="pl-[5rem] sm:pl-0 max-w-screen-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 sm:mt-[-1rem]">Privacy Policy</h1>
        <h2 className="text-xl font-semibold mb-8">Your privacy is important to us. Please read our Privacy Policy carefully.</h2>

        <p className="mt-4">
          <strong>1. Information Collection</strong>
        </p>
        <p>
          We collect and store information you provide to us when using our App. This may include personal information such as your name, email address, and more.
        </p>

        <p className="mt-4">
          <strong>2. Information Use</strong>
        </p>
        <p className='mt-2 ml-6'>
          <strong>2.1. User Account:</strong> We use your account information to provide you with access to our services and to communicate with you.
        </p>
        <p className='mt-2 ml-6'>
          <strong>2.2. Analytics:</strong> We may collect non-personal information for analytics and improvement of our App.
        </p>

        <p className="mt-4">
          <strong>3. Information Sharing</strong>
        </p>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.
        </p>

        <p className="mt-4">
          <strong>4. Security</strong>
        </p>
        <p>
          We take reasonable measures to protect your information, but no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <p className="mt-4">
          <strong>5. Changes to Privacy Policy</strong>
        </p>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page.
        </p>

        <p className="mt-4">
          <strong>6. Contact Us</strong>
        </p>
        <p>
          If you have any questions or concerns regarding our Privacy Policy, please contact us at [Contact Email].
        </p>
      </div>
    </div>
  );
};

export default PrivacyComp;
