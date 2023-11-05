import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-template-rows: auto auto auto; */
  /* gap: 2.4rem; */
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-areas: "today duration"; */
  gap: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 990px) {
    /* grid-template-areas:
      "today"
      "duration"; */
    grid-template-columns: 1fr;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <Charts>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </Charts>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
