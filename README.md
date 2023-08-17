# Use Case #23. Generate test data to validate functionality and identify issues

The main foal of this project is to test data by identifying the range of inputs, outputs, and scenarios necessary for thorough testing of software application. By clicking the "Generate Data" button, this tool creates two CSV files: titles.csv and credits.csv, each containing synthetic test data. Additionally, a visual report is created.

#### The generated data is divided into two separate files:

- titles.csv: Contains data related to movies and series.
- credits.csv: Contains data about credits associated with the movies and series

#### Dataset Characteristics:

- Each dataset contains over 100 entries with synthetic data.
- The credits.csv dataset is linked to the titles.csv dataset through the title_id attribute.
- The title_id values in the credits.csv dataset correspond to valid id values in the titles.csv dataset, maintaining dataset integrity.

![image](https://github.com/dmytromazun/generative-ai-uc23/assets/26287478/be1575b0-5e06-4566-a175-75d3fad7ad12)

#### Dataset Size:

- Both datasets are populated with more than 100 synthetic entries each.
- The large dataset size enables comprehensive testing, covering a wide range of scenarios.

#### Data Randomization Strategy:

- Synthetic data for each attribute is generated using a randomization strategy.
- The generated data consists of various formats and values.

#### Upon completing the synthetic data generation process, a report is generated containing:

- Total number of entries in each dataset.
- Number of invalid entries.
- List of entries.

![image](https://github.com/dmytromazun/generative-ai-uc23/assets/26287478/de3dda93-4179-4ec5-98e1-37e8535be135)

#### Running the project locally:

1. Clone the repository
2. Navigate to the test-data-generator directory
3. Install dependencies: npm i
4. Start the app: npm start
5. The app should be available at http://localhost:3000
