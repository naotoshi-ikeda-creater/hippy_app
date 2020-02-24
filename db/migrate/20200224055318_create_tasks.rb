class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, :null => false
      t.datetime :deadline
      t.integer :progress, :default => 0
      t.boolean :isDone, :default => false
      t.text :description

      t.timestamps
    end
  end
end