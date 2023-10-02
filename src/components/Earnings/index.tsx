import Container from "../common/Container";
import { Hostlayout } from "../common/Layout/Hostlayout";

export const Earnings = () => {
  return (
    <Hostlayout>
      <Container>
        <div className="flex flex-col gap-10 py-8">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Transaction History
          </h2>
          <table className="hidden lg:flex flex-col gap-4 w-full text-gray-600">
            <thead>
              <tr className="grid grid-cols-5 border-b p-2">
                <td>Type</td>
                <td>Reservation ID</td>
                <td>Date</td>
                <td>Earnings</td>
                <td>Payment</td>
              </tr>
            </thead>
            <tbody>
              <tr className="grid grid-cols-5 border-b p-2">
                <td>Adjustment</td>
                <td></td>
                <td>2 Oct 2023</td>
                <td>$200</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between text-gray-600 border-b p-2 items-center lg:hidden">
            <h2>Adjustment</h2>
            <div>
            <h2>$200</h2>
            <span className="text-sm">2 Oct 2023</span>
            </div>
          </div>
        </div>
      </Container>
    </Hostlayout>
  );
};
