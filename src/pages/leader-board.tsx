import LeaderBoard from "../components/LeaderBoard/LeaderBoard";

const LeaderBoardPage = () => {
  const users = [
    {
      id: "1",
      name: "DanielM",
      username: "daniel34",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "2",
      name: "Rishabh Hurshan",
      username: "rishh123",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "3",
      name: "Sheva_J11",
      username: "sheva123",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "4",
      name: "DonateloO",
      username: "donvtes",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "5",
      name: "ILona_J",
      username: "ilona123",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "6",
      name: "VitaliiVitalii",
      username: "vitalii78",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "7",
      name: "Alex22",
      username: "alex787",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "8",
      name: "Roza23",
      username: "roza782",
      avatar:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "9",
      name: "Yaroslavovich",
      username: "yaroz2",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
    {
      id: "10",
      name: "Donald_D1",
      username: "donald83",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100",
      coins: 5000,
    },
  ];

  return (
    <div className="pb-20 md:pb-6">
      <LeaderBoard users={users} />
    </div>
  );
};

export default LeaderBoardPage;
