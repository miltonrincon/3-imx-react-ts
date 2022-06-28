import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content-container">
        <div className="modal-container"> {/* v-if="welcomeModal==true"  */}
          <div className="modal-v1 gradient-1">
            <div className="modal-v1-body">
              <div className="connect-title">
                All Aboard the Soul Train
              </div>
              <p className="connect-text">
                Welcome to your Funky Studio Dashboard - tap into
                  your inner funk by starting your first Mojo Quest
                  & rack up those precious Funky Points
              </p>
            </div>
            <div className="btn-container">
              <button
                className="connect-v1-btn gradient-1"
                // @click="earnQuest"
              >
                Earn via Quest 0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

{/* <script>
export default {
  name: 'DashboardPage',
  layout: 'dashboard',
  head: {
    title: 'Tunky Dashboard',
  },
  data() {
    return {
      welcomeModal: true,
    };
  },
  methods: {
    earnQuest() {
      this.welcomeModal = false;
    },
  },
};
</script> */}
