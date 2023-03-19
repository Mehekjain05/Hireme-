'''
Common skills betn job n cand.
no of projects
preferred location
if Years of experience > min requierd years, then
Soft Skills should be extra but small points

'''



# criteria_weights = {"criteria_1": weight_1, "criteria_2": weight_2, ...}
# candidate_attributes = {"criteria_1": value_1, "criteria_2": value_2, ...}
# job_requirements = {"criteria_1": min_value_1, "criteria_2": min_value_2, ...}


criteria_weights = {"projects": 0.6, "location": 0.3, "experience": 0.1}
candidate_attributes = {"projects": 5, "location": "New York", "experience": 3}
job_requirements = {"projects": 3, "location": "New York", "experience": 2}

# Define the salary parameters
preferred_salary = 50000
salary_range = (12000, 45000)

# Calculate the score for each criterion
total_weight = sum(criteria_weights.values())
scores = {}
for criterion, weight in criteria_weights.items():
    if criterion in candidate_attributes and criterion in job_requirements:
        candidate_value = candidate_attributes[criterion]
        min_value = job_requirements[criterion]
        if criterion == "projects" or criterion == "experience":
            if candidate_value >= min_value:
                # Calculate the criterion score
                criterion_score = weight * (candidate_value / min_value)
                scores[criterion] = criterion_score
        elif criterion == "location":
            if candidate_value == min_value:
                # Assign full score for matching location
                scores[criterion] = weight
            else:
                # Assign partial score for nearby location
                scores[criterion] = weight * (1 - abs(ord(candidate_value[0]) - ord(min_value[0])) / 26)
        elif criterion == "salary":
            # Calculate the salary score
            salary_score = weight * ((preferred_salary - salary_range[0]) / (salary_range[1] - salary_range[0]))
            scores[criterion] = salary_score

# Calculate the Job Fit Score by adding up the scores
job_fit_score = (sum(scores.values()) / total_weight)
normalized_score = min(job_fit_score * 100, 100)

print(f"The Job Fit Score for the candidate is {normalized_score}")