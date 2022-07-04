import TTBox from "../../components/TTBox";
import { useAuthContext } from '../../context/auth/index';

const TestDb = () => {

  const {user} = useAuthContext();

  if(user){
    // setDoc(doc(db, 'users', user.uid), {
    //   email: user,
    //   registeredAt: Timestamp.fromDate(new Date()),
    // });
  }
  return(
    <TTBox>
      Tan dep trai
    </TTBox>
  )
}
export default TestDb;