class Api::TasksController < ApplicationController
    def index 
        @tasks = Task.all
        render json: @tasks
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render json: "cretate new task.\n", status: 200
        else
            render json: "fail to create. \n", status: 500
        end
    end

    def destroy
        @task = Task.find(task_params)
        @task.destroy
        render json:"destroy a task. \n" 

    end

    private

    def task_params
        params.require(:task).permit(:name, :deadline, :progress, :isDone, :description)
    end
end
