import styles from "./HoverCard.module.css";

const HoverCard = ({user}) => {

    return (
      <div className={`${user !== null ? 'show' : 'hide'}`}>
        {user !== null && (
          <div className={styles.main}>
                  <div className={styles["card_inner"]}>
                  <div className={styles.CardHeader}>
                    <img src={`${user.avatar}`} alt="img" />
                    <div className={styles.userActive}>
                      <h2>{`${user.first_name} ${user.last_name}`}</h2>
                      {user.isActive && <div className={styles.activeStatus}></div>}
                    </div>
                    <p>{user.email}</p>
                    <h2>Your Plan: Standard</h2>
                    <button className={styles["btn_active_user"]}>Active User</button>
                  </div>
                  <div className={styles.planUser}>
                    <label>Plan Uses</label>
                    <meter id="file" value="32" max="100">
                      32%
                    </meter>
                  </div>
                  <div className={styles.numberData}>
                    <div className={styles.dataLeft}>
                      <h2>{user.clicksReviewed}</h2>
                      <p>Clicks Reviewed</p>
                    </div>
                    <div className={styles.middle_bar}></div>
                    <div className={styles.dataRight}>
                      <h2>{user.monthlyClicks}</h2>
                      <p>Monthly Clicks</p>
                    </div>
                  </div>
                </div>
        </div>
        )}
      </div>
    );
  }
;

export default HoverCard;
