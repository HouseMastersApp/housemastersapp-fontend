import UserRepository from '../repositories/UserRepository';
import RewardRepository from '../repositories/RewardRepository';
import HouseholdRepository from '../repositories/HouseholdRepository';
import ProgressRepository from '../repositories/ProgressRepository';


const repositories = {
    'user': UserRepository,
    'reward': RewardRepository,
    'household': HouseholdRepository,
    'progress': ProgressRepository,
}
export default {
    get: name => repositories[name]
};