# App

GymPass-style app.

## FRs (Functional Requirements)

- [ ] Should be possible to register.
- [ ] Should be possible to authenticate.
- [ ] Should be possible to get the profile of the logged-in user.
- [ ] Should be possible to get the number of check-ins by the logged-in user.
- [ ] Should be possible for the user to get their check-in history.
- [ ] Should be possible for a user to find gyms near them.
- [ ] Should be possible for a user to find gyms by name.
- [ ] Should be possible for a user to do a check-in at a gym.
- [ ] Should be possible to validate a user's check-in.
- [ ] Should be possible to register a gym.

## BRs (Business Rules)

- [ ] The user should not be able to register with a duplicated email.
- [ ] The user should not be able to do 2 check-ins on the same day.
- [ ] The user should not be able to do a check-in less than 100m from the gym.
- [ ] Check-in should be validated only until 20 minutes after creation.
- [ ] Only an admin can validate the check-in.
- [ ] Gyms should be registered only by an admin.

## NFRs (Non-Functional Requirements)

- [ ] User's password should be encrypted.
- [ ] The application data should be persisted in a PostgreSQL database.
- [ ] All lists of data should be paginated with 20 items per page.
- [ ] The user should be identified by JWT (JSON Web Token).