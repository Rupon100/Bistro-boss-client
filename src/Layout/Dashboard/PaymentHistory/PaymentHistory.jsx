import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });
    console.log(payments)
    return (
        <div>
            <h2 className="text-3xl">Total payments: {payments.length}</h2>
            <ul>
                {payments.map(item => <li key={item._id} >{item.transitionid}</li>)}
            </ul>
        </div>
    );
};

export default PaymentHistory;