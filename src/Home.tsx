export const Home = () => {
  return (
    <div>
      <p>TEST HOMEPAGE</p>
      <p>FIREBASE - {process.env.REACT_APP_FIREBASE_AUTH}</p>
      <p>API KEY - {process.env.REACT_APP_API_KEY}</p>
    </div>
  );
}