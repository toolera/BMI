# Import the required libraries and modules:
import tkinter as tk
from tkinter import filedialog
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg


# Create the main application window and set its attributes:


root = tk.Tk()
root.title("BMI Tracker")
root.geometry("800x600")
root.configure(bg="black")


# Create a function to handle the BMI calculation and plotting:


def process_data(df):
    # Calculate BMI
    df['BMI'] = df['kilogram'] / (df['height'] ** 2)
    # Determine BMI status
    df['BMI Status'] = pd.cut(df['BMI'], bins=[0, 18.5, 25, float('inf')], labels=['Low', 'Normal', 'High'])

    # Clear the existing plot, if any
    plt.clf()
    # Create the plot
    fig, ax1 = plt.subplots()
    ax2 = ax1.twinx()
    ax1.plot(df['datetime'], df['kilogram'], 'g-', label='kg')
    ax2.plot(df['datetime'], df['BMI'], 'b-', label='BMI')
    ax1.set_xlabel('Date and Time')
    ax1.set_ylabel('kg', color='g')
    ax2.set_ylabel('BMI', color='b')
    fig.autofmt_xdate()  # Format x-axis labels as dates
    plt.title('BMI Tracker')
    plt.legend()

    # Display the plot in the application window
    canvas = FigureCanvasTkAgg(fig, master=root)
    canvas.draw()
    canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=1)

# Create a function to handle the CSV import functionality:

def import_csv():
    file_path = filedialog.askopenfilename(filetypes=[("CSV Files", "*.csv")])
    if file_path:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(file_path)
        # Process the data and display the plot
        process_data(df)

# Create a function to handle the CSV export functionality:

def export_csv():
    file_path = filedialog.asksaveasfilename(defaultextension=".csv", filetypes=[("CSV Files", "*.csv")])
    if file_path:
        # Save the DataFrame to a CSV file
        df.to_csv(file_path, index=False)

# Create the buttons for importing, exporting, and plotting:

import_button = tk.Button(root, text="Import CSV", command=import_csv)
import_button.pack(side=tk.LEFT)

export_button = tk.Button(root, text="Export CSV", command=export_csv)
export_button.pack(side=tk.LEFT)

process_button = tk.Button(root, text="Process Data", command=process_data)
process_button.pack(side=tk.LEFT)

root.mainloop()
